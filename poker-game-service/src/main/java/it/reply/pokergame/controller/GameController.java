package it.reply.pokergame.controller;


import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.extern.slf4j.Slf4j;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Validated
@RestController
@Slf4j
@RequestMapping(path = "/game")
@Tag(name = "Game Controller", description = "Endpoints for managing checks")
public class GameController {
}
