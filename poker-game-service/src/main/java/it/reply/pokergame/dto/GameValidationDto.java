package it.reply.pokergame.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotEmpty;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class GameValidationDto {

    @NotEmpty
    private String gameName;

    @NotEmpty
    private String playLink;

    @NotEmpty
    private Long playerId;
}
