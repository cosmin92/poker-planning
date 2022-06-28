package it.reply.pokergame.service;

import it.reply.pokergame.dto.GameDto;
import it.reply.pokergame.dto.GameValidationDto;

public interface GameService {

    Long gameCreation(GameValidationDto dto);

    GameDto findGame(Long gameId);

    GameDto addGame(Long idGame, Long idPlayer, Integer vote);
}
