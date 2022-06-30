package it.reply.pokergame.service;

import it.reply.pokergame.dto.GameDto;
import it.reply.pokergame.dto.GameValidationDto;
import it.reply.pokergame.dto.PlayerDto;

import java.util.List;

public interface GameService {

    Long gameCreation(GameValidationDto dto);

    GameDto findGame(Long gameId);

    GameDto addVotation(Long idGame, Long idPlayer, Integer vote);

    List<PlayerDto> getPlayerList(Long idGame);
}
