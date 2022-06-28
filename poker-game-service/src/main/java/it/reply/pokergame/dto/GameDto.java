package it.reply.pokergame.dto;

import it.reply.pokergame.model.entity.Player;
import it.reply.pokergame.model.entity.Votation;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;

import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Builder
public class GameDto {

    private Long id;

    public String name;

    private String playLink;

    public List<PlayerDto> players;

    private List<VotationDto> votation;
}
