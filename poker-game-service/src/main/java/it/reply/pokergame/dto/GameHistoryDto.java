package it.reply.pokergame.dto;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class GameHistoryDto {

    private Long id;
    private String name;
    private String result;
    private Float average;
    private Integer mostVotedCard;
    private Date time;
    private Integer totalPlayersVoted;
}
