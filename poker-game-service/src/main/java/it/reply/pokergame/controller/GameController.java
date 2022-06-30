package it.reply.pokergame.controller;

import java.net.URI;
import java.util.List;

import it.reply.pokergame.dto.GameCreationOutputDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.google.firebase.messaging.FirebaseMessagingException;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import it.reply.pokergame.dto.GameDto;
import it.reply.pokergame.dto.GameValidationDto;
import it.reply.pokergame.dto.PlayerDto;
import it.reply.pokergame.model.ErrorResponseModel;
import it.reply.pokergame.service.GameService;
import lombok.extern.slf4j.Slf4j;

@Validated
@RestController
@Slf4j
@RequestMapping(path = "/api/games")
@Tag(name = "Game Controller", description = "Endpoints for managing checks")
public class GameController {

    @Autowired
    private GameService gameService;

   // @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    @PostMapping("/gameCreation")
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
    public ResponseEntity<GameCreationOutputDto> gameCreation(@RequestBody GameValidationDto dto) {
//        log.info("Entered endpoint: POST '/game/gameCreation'");
//        URI location = ServletUriComponentsBuilder.fromCurrentRequestUri().path("/{gameId}")
//                .buildAndExpand(gameService.gameCreation(dto)).toUri();
//
//        return ResponseEntity.created(location).build();
        return ResponseEntity.ok(gameService.gameCreation(dto));
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
    @GetMapping("/{idGame}")
    public ResponseEntity<GameDto> findGame(@PathVariable("idGame") Long idGame) {
        log.info("Entered endpoint: GET '/game/{}'", idGame);
        return ResponseEntity.ok(gameService.findGame(idGame));
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
    @PostMapping("/addVotation")
    public ResponseEntity<GameDto> addVotation(@RequestParam(value = "idGame", required = true) Long idGame,
                                               @RequestParam(value = "idPlayer", required = true) Long idPlayer,
                                               @RequestParam(value = "vote", required = true) Integer vote) throws FirebaseMessagingException {
        log.info("Entered endpoint: POST '/game/addVotation'");
        return ResponseEntity.ok(gameService.addVotation(idGame, idPlayer, vote));
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
    @PostMapping("/getPlayerList")
    public ResponseEntity<List<PlayerDto>> getPlayerList(@RequestParam(value = "idGame", required = true) Long idGame) {
        log.info("Entered endpoint: POST '/game/getPlayerList");
        return ResponseEntity.ok(gameService.getPlayerList(idGame));
    }

    @GetMapping(path = "/{idGame}/invite/{idPlayer}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> invitePlayer(@PathVariable("idGame") Long idGame, @PathVariable("idPlayer") Long idPlayer) {
        return ResponseEntity.ok().body(gameService.invitePlayer(idGame, idPlayer));
    }
}
