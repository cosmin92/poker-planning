package it.reply.pokergame.controller;


import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import it.reply.pokergame.model.ErrorResponseModel;
import it.reply.pokergame.dto.GameDto;
import it.reply.pokergame.service.GameService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;

@Validated
@RestController
@Slf4j
@RequestMapping(path = "/game")
@Tag(name = "Game Controller", description = "Endpoints for managing checks")
public class GameController {

    @Autowired
    private GameService gameService;

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    @Operation(
            summary = "Get information of game",
            description = "Get Game",
            tags = { "game Controller" },
            responses = {
                    @ApiResponse(
                            description = "Ok",
                            responseCode = "200",
                            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Integer.class))
                    ),
                    @ApiResponse(description = "Not found", responseCode = "404", content =  @Content(mediaType = "application/json", schema = @Schema(implementation = ErrorResponseModel.class))),
                    @ApiResponse(description = "Internal Server Error", responseCode = "500", content = @Content())
            }
    )
    public ResponseEntity<String> gameCreation(
            @RequestParam(value = "gameName", required = true) String gameName,
            @RequestParam(value = "admin", required = true) Long playerId,
            @RequestParam(value = "link", required = true) String link
    ) {
        log.info("Entered endpoint: POST '/game/gameCreation'");
        URI location = ServletUriComponentsBuilder.fromCurrentRequestUri().path("/{gameId}")
                .buildAndExpand(gameService.gameCreation(gameName, playerId, link)).toUri();

        return ResponseEntity.created(location).build();
    }


    @Operation(
            summary = "Get information of game",
            description = "Get Game",
            tags = { "game Controller" },
            responses = {
                    @ApiResponse(
                            description = "Ok",
                            responseCode = "200",
                            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Integer.class))
                    ),
                    @ApiResponse(description = "Not found", responseCode = "404", content =  @Content(mediaType = "application/json", schema = @Schema(implementation = ErrorResponseModel.class))),
                    @ApiResponse(description = "Internal Server Error", responseCode = "500", content = @Content())
            }
    )
    @GetMapping("/findGame")
    public ResponseEntity<GameDto> findGame(@RequestParam(value = "idGame", required = true) Long idGame) {
        log.info("Entered endpoint: POST '/game/findGame'");
        return ResponseEntity.ok(gameService.findGame(idGame));
    }
}
