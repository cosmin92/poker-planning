package it.reply.pokergame.dto;

import it.reply.pokergame.model.entity.Player;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;

import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Builder
public class GameDto {

    public String name;

    public List<Player> players;
}
