package it.reply.pokergame.controller;


import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import it.reply.pokergame.model.ErrorResponseModel;
import it.reply.pokergame.model.Player;
import it.reply.pokergame.service.GameService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@Validated
@RestController
@Slf4j
@RequestMapping(path = "/game")
@Tag(name = "Game Controller", description = "Endpoints for managing checks")
public class GameController {

    @Autowired
    private GameService gameService;

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
    @GetMapping("/gameCreation")
    public ResponseEntity<String> gameCreation(
            @RequestParam(value = "gameName", required = true) String gameName,
            @RequestParam(value = "admin", required = true) Player admin,
            @RequestParam(value = "link", required = true) String link
    ) {
        log.info("Entered endpoint: GET '/game/gameCreation'");
        return ResponseEntity.ok(gameService.gameCreation(gameName, admin, link));
    }
}
