package it.reply.pokergame.service.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import it.reply.pokergame.exception.PokerException;
import it.reply.pokergame.mapper.GameMapper;
import it.reply.pokergame.model.entity.Game;
import it.reply.pokergame.dto.GameDto;
import it.reply.pokergame.model.entity.Player;
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
import java.util.Optional;

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
    public Long gameCreation(String gameName, Long id, String link) {

        Optional<Player> admin = Optional.of(playerService.updatePlayerRole(id, RoleEnum.ADMIN.toString()));

        admin.orElseThrow().getGame().setGameName(gameName);

        List<Player> playerList = new ArrayList<>();
        playerList.add(admin.orElseThrow());
        Game newGame = Game.builder()
                .gameName(gameName)
                .playLink(link)
                .players(playerList)
                .build();

        log.info("created game :"+gameName);

        return gameRepository.save(newGame).getId();

    }

    @Override
    public GameDto findGame(Long gameId) {
        GameDto dto = gameMapper.mapFromEntityToDto(gameRepository.findById(gameId).orElseThrow());

        if (!Objects.isNull(dto))return dto;
            else throw new PokerException(HttpStatus.NOT_FOUND, "result not found for this id");
    }
}
