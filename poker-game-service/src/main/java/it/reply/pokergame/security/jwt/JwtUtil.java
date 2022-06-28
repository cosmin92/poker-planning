package it.reply.pokergame.security.jwt;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.UUID;
import java.util.concurrent.TimeUnit;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;

import it.reply.pokergame.security.CustomUserDetails;
import it.reply.pokergame.security.SecurityConstants;

public class JwtUtil {

    public static String createJwtAccessToken(CustomUserDetails user) {
        long nowMillis = System.currentTimeMillis();
        long expMillis = nowMillis + TimeUnit.MINUTES.toMillis(10);   /// expire after 10min

        List<String> roles = new ArrayList<>();
        user.getAuthorities().forEach(authority -> roles.add(authority.getAuthority()));

        return JWT.create()
            .withIssuedAt(new Date(nowMillis))
            .withExpiresAt(new Date(expMillis))
            .withSubject(user.getUsername())
            .withIssuer(SecurityConstants.JWT_ISSUER)
            .withClaim(SecurityConstants.JWT_ROLES, roles)
            .withClaim(SecurityConstants.JWT_USER_ID, user.getId())
            .sign(Algorithm.HMAC256(SecurityConstants.JWT_SECRET));
    }

    public static String createJwtRefreshToken(String username, Long userId) {
        long nowMillis = System.currentTimeMillis();
        long expMillis = nowMillis + TimeUnit.DAYS.toMillis(365);   /// expire after 1 year

        return JWT.create()
            .withIssuedAt(new Date(nowMillis))
            .withExpiresAt(new Date(expMillis))
            .withSubject(username)
            .withIssuer(SecurityConstants.JWT_ISSUER)
            .withClaim(SecurityConstants.JWT_USER_ID, userId)
            .sign(Algorithm.HMAC256(SecurityConstants.JWT_SECRET));
    }

    public static DecodedJWT decodeJwt(String token) {
        Algorithm algorithm = Algorithm.HMAC256(SecurityConstants.JWT_SECRET);
        JWTVerifier jwtVerifier = JWT.require(algorithm).build();
        return jwtVerifier.verify(token);
    }

    public static boolean validateToken(String token) {
        Date expiration = decodeJwt(token).getExpiresAt();
        return expiration.after(new Date());
    }
}
