package it.reply.pokergame.service;

import it.reply.pokergame.dto.GameCreationOutputDto;
import it.reply.pokergame.dto.GameDto;
import it.reply.pokergame.dto.GameValidationDto;
import it.reply.pokergame.dto.PlayerDto;

import java.util.List;

import com.google.firebase.messaging.FirebaseMessagingException;

public interface GameService {

    GameCreationOutputDto gameCreation(GameValidationDto dto);

    GameDto findGame(Long gameId);

    GameDto addVotation(Long idGame, Long idPlayer, Integer vote) throws FirebaseMessagingException;

    List<PlayerDto> getPlayerList(Long idGame);

    String invitePlayer(Long idGame, Long idPlayer);
}
