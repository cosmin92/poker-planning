package it.reply.pokergame.mapper;

import it.reply.pokergame.model.Game;
import it.reply.pokergame.model.GameDto;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.NullValuePropertyMappingStrategy;

@Mapper(
        componentModel = "spring",
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
public interface GameMapper {

    @Mapping(source = "gameName", target = "name")
    GameDto mapFromEntityToDto(Game game);

    @Mapping(source = "name", target = "gameName")
    Game mapFromDtoToEntity(GameDto dto);
}
