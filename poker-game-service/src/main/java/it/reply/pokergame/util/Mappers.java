package it.reply.pokergame.util;

import java.util.Objects;

import it.reply.pokergame.dto.PlayerRegistrationDto;
import it.reply.pokergame.model.Player;

public class Mappers {

    public static Player toPlayer(PlayerRegistrationDto playerRegistrationDto) {
        Player player = new Player();
        player.setUsername(playerRegistrationDto.getUsername());
        player.setPassword(playerRegistrationDto.getPassword());

        if(Objects.isNull(playerRegistrationDto.getRole())) {
            player.setRole(RoleEnum.USER.toString());
        } else {
            player.setRole(playerRegistrationDto.getRole());
        }
        player.setActive(false);
        return player;
    }
}
