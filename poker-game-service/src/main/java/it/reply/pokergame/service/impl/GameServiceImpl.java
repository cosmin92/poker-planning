package it.reply.pokergame.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.google.firebase.messaging.FirebaseMessagingException;

import it.reply.pokergame.dto.GameDto;
import it.reply.pokergame.dto.GameValidationDto;
import it.reply.pokergame.dto.PlayerDto;
import it.reply.pokergame.exception.PokerException;
import it.reply.pokergame.exception.ResourceNotFoundException;
import it.reply.pokergame.mapper.GameMapper;
import it.reply.pokergame.mapper.PlayerMapper;
import it.reply.pokergame.model.PushNotification;
import it.reply.pokergame.model.entity.Game;
import it.reply.pokergame.model.entity.Player;
import it.reply.pokergame.model.entity.Votation;
import it.reply.pokergame.repository.GameRepository;
import it.reply.pokergame.repository.PlayerRepository;
import it.reply.pokergame.service.FCMService;
import it.reply.pokergame.service.GameService;
import it.reply.pokergame.service.PlayerService;
import it.reply.pokergame.util.RoleEnum;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class GameServiceImpl implements GameService {

    private final GameRepository gameRepository;

    private final PlayerRepository playerRepository;

    private final GameMapper gameMapper;

    private final PlayerService playerService;

    private final PlayerMapper playerMapper;

    private final FCMService fcmService;

    private final static String FCM_TOKEN = "FCM_TOKEN_DA_CONDIVIDERE_CON_FE";

    @Override
    public Long gameCreation(GameValidationDto dto) {

        Player admin = playerService.updatePlayerRole(dto.getPlayerId(), RoleEnum.ADMIN.toString());

        List<Player> playerList = new ArrayList<>();
        playerList.add(admin);

            Game newGame = Game.builder()
                .gameName(dto.getGameName())
                .players(playerList)
                .build();

        log.info("created game :"+dto.getGameName());

        admin.setGame(newGame);

        newGame = gameRepository.save(newGame);

        newGame.setPlayLink(dto.getPlayLink()+"/"+newGame.getId());

        gameRepository.save(newGame);

        return newGame.getId();

    }

    @Override
    public GameDto findGame(Long gameId) {
        GameDto dto = gameMapper.mapFromEntityToDto(gameRepository.findById(gameId).orElseThrow());

        if (!Objects.isNull(dto))return dto;
            else throw new PokerException(HttpStatus.NOT_FOUND, "result not found for this id");
    }

    @Override
    public GameDto addVotation(Long idGame, Long idPlayer, Integer vote) throws FirebaseMessagingException {

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

        //TODO: Send push notification here -- Da testare
         fcmService.sendNotification(
             PushNotification.builder()
             .title("notification")
             .message("notif. message")
             .token(FCM_TOKEN)
             .build()
         );

        return gameMapper.mapFromEntityToDto(currentGame);
    }

    @Override
    public List<PlayerDto> getPlayerList(Long idGame) {

        Optional<Game> currentGame = gameRepository.findById(idGame);

        if(currentGame.isPresent()) return playerMapper.mapFromPlayerListEntityToDto(currentGame.orElseThrow().getPlayers());
        else throw new PokerException(HttpStatus.NOT_FOUND,"not result for this id :"+idGame);
    }

    @Override
    public String invitePlayer(Long idGame, Long idPlayer) {
        Player player = playerService.getPlayer(idPlayer)
            .orElseThrow(() -> new ResourceNotFoundException(Player.class.getName(), idPlayer.toString()));

        Game game = gameRepository.findById(idGame)
            .orElseThrow(() -> new ResourceNotFoundException(Game.class.getName(), idGame.toString()));

        player.setGame(game);
        playerService.save(player);

        return game.getPlayLink();
    }
}
