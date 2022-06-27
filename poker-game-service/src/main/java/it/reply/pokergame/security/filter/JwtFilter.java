package it.reply.pokergame.security.filter;

import static org.springframework.http.HttpHeaders.AUTHORIZATION;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Objects;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import com.auth0.jwt.interfaces.DecodedJWT;

import it.reply.pokergame.security.SecurityConstants;
import it.reply.pokergame.security.jwt.JwtUtil;
import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class JwtFilter extends OncePerRequestFilter {

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {

        String jwt = this.resolveToken(request);
        String requestURI = request.getRequestURI();

        // if token is valid configure Spring Security to manually set authentication
        if (StringUtils.hasText(jwt) && JwtUtil.validateToken(jwt)) {
            UsernamePasswordAuthenticationToken authentication = this.getAuthentication(jwt, request);

            // After setting the Authentication in the context, we specify
            // that the current user is authenticated. So it passes the
            // Spring Security Configurations successfully.
            SecurityContextHolder.getContext().setAuthentication(authentication);

            log.debug("set Authentication to security context for '{}', uri: {}", authentication.getName(), requestURI);
        } else {
            log.debug("no valid JWT token found, uri: {}", requestURI);
        }

        filterChain.doFilter(request, response);
    }

    private UsernamePasswordAuthenticationToken getAuthentication(String jwt, HttpServletRequest request) {
        DecodedJWT decodedJWT = JwtUtil.decodeJwt(jwt);

        Collection<SimpleGrantedAuthority> authorities = new ArrayList<>();

        List<String> roles = decodedJWT.getClaim(SecurityConstants.JWT_ROLES).asList(String.class);

        if (Objects.nonNull(roles)) {
            roles.forEach(role -> authorities.add(new SimpleGrantedAuthority(role)));
        }

        String username = decodedJWT.getSubject();
        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(username, null, authorities);
        authenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));

        return authenticationToken;
    }

    private String resolveToken(HttpServletRequest request) {
        String authorizationHeader = request.getHeader(AUTHORIZATION);
        if (StringUtils.hasText(authorizationHeader) && authorizationHeader.startsWith(SecurityConstants.BEARER_AUTH)) {
            return authorizationHeader.substring(SecurityConstants.BEARER_AUTH.length());
        }
        return null;
    }
}
