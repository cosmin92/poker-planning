package it.reply.pokergame.service.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import it.reply.pokergame.model.Player;
import it.reply.pokergame.repository.GameRepository;
import it.reply.pokergame.repository.PlayerRepository;
import it.reply.pokergame.service.GameService;
import it.reply.pokergame.util.RoleEnum;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;

import java.util.Objects;

@Service
@RequiredArgsConstructor
@Slf4j
public class GameServiceImpl implements GameService {

    private final GameRepository gameRepository;

    private final PlayerRepository playerRepository;

    private final ObjectMapper mapper = new ObjectMapper();

    public Boolean playerCheck(Player player){
        if (StringUtils.isBlank(player.getUsername()) ||
            StringUtils.isBlank(player.getPassword()) ) return false;
        else return true;
    }

    @Override
    public String gameCreation(String gameName, Player admin, String link) {



        admin.getGame().setGameName(gameName);


        return null;
    }
}
