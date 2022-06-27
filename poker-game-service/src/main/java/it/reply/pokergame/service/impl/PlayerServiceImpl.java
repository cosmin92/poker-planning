package it.reply.pokergame.service.impl;

import org.springframework.stereotype.Service;

import it.reply.pokergame.model.Player;
import it.reply.pokergame.repository.GameRepository;
import it.reply.pokergame.repository.PlayerRepository;
import it.reply.pokergame.service.PlayerService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
@RequiredArgsConstructor
public class PlayerServiceImpl implements PlayerService {

    private final GameRepository gameRepository;
    private final PlayerRepository playerRepository;


    @Override
    public Long registration(Player toPlayer) {

        return null;
    }

    private boolean existByUsername(String username) {
        return playerRepository.existsByUsername(username);
    }
}
