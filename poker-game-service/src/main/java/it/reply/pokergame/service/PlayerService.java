package it.reply.pokergame.service;

import java.util.Optional;

import it.reply.pokergame.model.entity.Player;

public interface PlayerService {

    Long registration(Player player);
    Optional<Player> getPlayer(Long playerId);
    boolean existByUsername(String username);
    Player updatePlayerRole(Long playerId, String role);
}
