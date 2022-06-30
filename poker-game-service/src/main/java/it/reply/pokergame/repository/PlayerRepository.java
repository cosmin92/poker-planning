package it.reply.pokergame.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import it.reply.pokergame.model.entity.Player;

public interface PlayerRepository extends JpaRepository<Player, Long> {

    Optional<Player> findByUsername(String username);
    boolean existsByUsername(String username);
    Optional<Player> findByIdAndActive(Long playerId, boolean active);
}
