package it.reply.pokergame.service.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import it.reply.pokergame.dto.GameDto;
import it.reply.pokergame.dto.GameValidationDto;
import it.reply.pokergame.dto.VotationDto;
import it.reply.pokergame.exception.PokerException;
import it.reply.pokergame.mapper.GameMapper;
import it.reply.pokergame.model.entity.Game;
import it.reply.pokergame.model.entity.Player;
import it.reply.pokergame.model.entity.Votation;
import it.reply.pokergame.repository.GameRepository;
import it.reply.pokergame.repository.PlayerRepository;
import it.reply.pokergame.service.GameService;
import it.reply.pokergame.service.PlayerService;
import it.reply.pokergame.util.RoleEnum;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Service
@RequiredArgsConstructor
@Slf4j
public class GameServiceImpl implements GameService {

    private final GameRepository gameRepository;

    private final PlayerRepository playerRepository;

    private final GameMapper gameMapper;

    private final PlayerService playerService;

    private final ObjectMapper mapper = new ObjectMapper();



    @Override
    public Long gameCreation(GameValidationDto dto) {

        Player admin = playerService.updatePlayerRole(dto.getPlayerId(), RoleEnum.ADMIN.toString());

        List<Player> playerList = new ArrayList<>();
        playerList.add(admin);
    Game newGame = Game.builder()
                .gameName(dto.getGameName())
                .playLink(dto.getGameLink())
                .players(playerList)
                .build();

        log.info("created game :"+dto.getGameName());

        admin.setGame(newGame);

        return gameRepository.save(newGame).getId();

    }

    @Override
    public GameDto findGame(Long gameId) {
        GameDto dto = gameMapper.mapFromEntityToDto(gameRepository.findById(gameId).orElseThrow());

        if (!Objects.isNull(dto))return dto;
            else throw new PokerException(HttpStatus.NOT_FOUND, "result not found for this id");
    }

    @Override
    public GameDto addVotation(Long idGame, Long idPlayer, Integer vote) {

        boolean ch = true;

        Votation currentVote;

        Player admin = playerService.getPlayer(idPlayer).orElseThrow();

        Game currentGame = gameRepository.findById(idGame).orElseThrow();

        if (currentGame.getVotation().isEmpty()) ch = false;
        for (Votation vot : currentGame.getVotation()) {
            if (vot.getGame().equals(currentGame)){
                if (Objects.isNull(vot.getQta()) || vot.getQta() == 0){
                    vot.setQta(1);
                }else {
                    vot.setQta(vot.getQta()+1);
                }
                ch = true;
            }else ch =false;
        }

        if (!ch) {
             currentVote = Votation.builder()
                    .voteName(vote)
                    .qta(1)
                     .game(currentGame)
                    .build();

            currentGame.getVotation().add(currentVote);
        }

        playerRepository.save(admin);
        gameRepository.save(currentGame);

        return gameMapper.mapFromEntityToDto(currentGame);



    }
}
