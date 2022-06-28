package it.reply.pokergame.util;

import java.util.Objects;

import it.reply.pokergame.dto.PlayerDto;
import it.reply.pokergame.dto.PlayerRegistrationDto;
import it.reply.pokergame.model.entity.Player;

public class Mappers {

    public static Player toPlayer(PlayerRegistrationDto playerRegistrationDto) {
        Player player = new Player();
        player.setUsername(playerRegistrationDto.getUsername());
        player.setPassword(playerRegistrationDto.getPassword());

        if(Objects.isNull(playerRegistrationDto.getRole())) {
            player.setRole(RoleEnum.USER.toString());
        } else {
            player.setRole(playerRegistrationDto.getRole().toUpperCase());
        }
        player.setActive(false);
        return player;
    }

    public static PlayerDto toPlayerDto(Player player) {
        PlayerDto dto = new PlayerDto();
        dto.setId(player.getId());
        dto.setUsername(player.getUsername());
        dto.setRole(player.getRole());
        dto.setVote(player.getVote());
        return dto;
    }
}
