package it.reply.pokergame.mapper;

import it.reply.pokergame.model.entity.Game;
import it.reply.pokergame.dto.GameDto;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.NullValuePropertyMappingStrategy;

@Mapper
public interface GameMapper {
    GameDto mapFromEntityToDto(Game game);
    Game mapFromDtoToEntity(GameDto dto);
}
