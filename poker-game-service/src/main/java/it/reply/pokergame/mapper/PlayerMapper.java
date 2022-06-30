package it.reply.pokergame.mapper;

import it.reply.pokergame.dto.PlayerDto;
import it.reply.pokergame.model.entity.Player;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper
public interface PlayerMapper {

    PlayerDto mapFromPlayerEntityToDto(Player entity);
    List<PlayerDto> mapFromPlayerListEntityToDto(List<Player> entityList);

}
