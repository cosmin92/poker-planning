package it.reply.pokergame.service;

import it.reply.pokergame.dto.GameDto;

public interface GameService {

    Long gameCreation(String gameName, Long id, String link);

    GameDto findGame(Long gameId);

    GameDto addGame(Long idGame, Long idPlayer, Integer vote);
}
