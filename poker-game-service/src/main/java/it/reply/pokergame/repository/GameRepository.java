package it.reply.pokergame.repository;

import it.reply.pokergame.model.Game;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GameRepository extends JpaRepository<Game, Long> {
}
