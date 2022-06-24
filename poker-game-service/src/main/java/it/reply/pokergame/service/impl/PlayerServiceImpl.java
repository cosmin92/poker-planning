package it.reply.pokergame.service.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import it.reply.pokergame.repository.GameRepository;
import it.reply.pokergame.repository.PlayerRepository;
import it.reply.pokergame.service.PlayerService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Slf4j
public class PlayerServiceImpl implements PlayerService {

    private final GameRepository gameRepository;

    private final PlayerRepository playerRepository;

    private final ObjectMapper mapper = new ObjectMapper();

}
