package it.reply.pokergame.security.jwt;

import java.util.Date;
import java.util.List;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;

import it.reply.pokergame.security.CustomUserDetails;
import it.reply.pokergame.security.SecurityConstants;

public class JwtUtil {

    public static String createJWT(CustomUserDetails user) {
        long nowMillis = System.currentTimeMillis();
        long expMillis = nowMillis + 600000;   /// expire after 10min
        Date now = new Date(nowMillis);
        Date exp = new Date(expMillis);

        return JWT.create()
            .withIssuedAt(now)
            .withExpiresAt(exp)
            .withSubject(user.getUsername())
            .withIssuer(SecurityConstants.JWT_ISSUER)
            .withClaim(SecurityConstants.JWT_ROLES, List.of(user.getAuthorities()))
            .withClaim(SecurityConstants.JWT_USER_ID, user.getId())
            .sign(Algorithm.HMAC256(SecurityConstants.JWT_SECRET));
    }

    public static DecodedJWT decodeJwt(String token) {
        Algorithm algorithm = Algorithm.HMAC256(SecurityConstants.JWT_SECRET);
        JWTVerifier jwtVerifier = JWT.require(algorithm).build();
        return jwtVerifier.verify(token);
    }

    public static boolean validateToken(String token) {
        Date expiration = decodeJwt(token).getExpiresAt();
        return expiration.before(new Date());
    }
}
