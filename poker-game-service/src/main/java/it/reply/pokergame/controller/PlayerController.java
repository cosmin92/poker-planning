package it.reply.pokergame.controller;

import java.net.URI;

import io.swagger.v3.oas.annotations.tags.Tag;
import it.reply.pokergame.dto.PlayerRegistrationDto;
import it.reply.pokergame.repository.PlayerRepository;
import it.reply.pokergame.service.PlayerService;
import it.reply.pokergame.util.Mappers;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping(path = "/players")
public class PlayerController {

    private final PlayerService playerService;

    @PostMapping
    public ResponseEntity<String> registration(@RequestBody PlayerRegistrationDto playerRegistrationDto) {
        URI location = ServletUriComponentsBuilder.fromCurrentRequestUri().path("/{playerId}")
            .buildAndExpand(playerService.registration(
                Mappers.toPlayer(playerRegistrationDto)
            )).toUri();

        return ResponseEntity.created(location).build();
    }

}
