package it.reply.pokergame.service;

import it.reply.pokergame.model.GameDto;
import it.reply.pokergame.model.Player;
import org.springframework.data.domain.Page;

public interface GameService {

    Long gameCreation(String gameName, Long id, String link);

    GameDto findGame(Long gameId);
}
