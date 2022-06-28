package it.reply.pokergame.dto;

import it.reply.pokergame.model.entity.Game;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PlayerDto {

    private Long id;
    private String username;
    private String role;
    private Integer vote;
}
