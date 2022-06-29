package it.reply.pokergame.dto;

import it.reply.pokergame.model.entity.Player;
import it.reply.pokergame.model.entity.Votation;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class GameDto {

    private Long id;

    public String gameName;

    private String playLink;

//    public List<PlayerDto> players;
//
//    private List<VotationDto> votation;

}
