package it.reply.pokergame.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class GameCreationOutputDto {
    private Long gameId;

    public String gameName;

    private String playLink;

    private Long playerId;
}
