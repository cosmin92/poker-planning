package it.reply.pokergame.dto;

import it.reply.pokergame.model.entity.Game;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@NoArgsConstructor
@AllArgsConstructor
@Builder
public class VotationDto {
    private Long id;

    private Integer voteName;

    private Integer qta;

    private GameDto game;

}
