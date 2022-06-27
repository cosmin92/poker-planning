package it.reply.pokergame.exception;

import lombok.Getter;

@Getter
public class UniqueConstraintViolationException extends RuntimeException {

    private final String message;

    public UniqueConstraintViolationException(String className, String id) {
        this.message = String.format("Resource %s with id %s already exists.", className, id);
    }
}
