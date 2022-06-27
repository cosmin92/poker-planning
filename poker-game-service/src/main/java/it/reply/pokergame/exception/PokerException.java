package it.reply.pokergame.exception;

import org.springframework.http.HttpStatus;

public class PokerException extends RuntimeException{

public PokerException(HttpStatus status, String message) {
    super(message);

    this.status = status;
}

    private final HttpStatus status;
}
