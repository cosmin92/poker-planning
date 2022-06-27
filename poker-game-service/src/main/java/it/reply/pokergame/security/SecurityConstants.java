package it.reply.pokergame.security;

public final class SecurityConstants {

    public static final String JWT_SECRET;
    public static final String JWT_ISSUER;
    public static final String JWT_ROLES;
    public static final String JWT_USER_ID;
    public static final String BEARER_AUTH;

    static {
        JWT_SECRET = "q3t6w9z$C&F)J@NcQfTjWnZr4u7x!A%D*G-KaPdSgUkXp2s5v8y/B?E(H+MbQeTh";
        JWT_ISSUER = "http://issuer.poker-game.com/";
        JWT_ROLES = "roles";
        JWT_USER_ID = "userId";
        BEARER_AUTH = "Bearer ";
    }
}
