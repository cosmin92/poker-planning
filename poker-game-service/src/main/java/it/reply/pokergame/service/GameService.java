package it.reply.pokergame.service;

import it.reply.pokergame.model.Player;
import org.springframework.data.domain.Page;

public interface GameService {

    String gameCreation(String gameName, Player admin, String link);
}
