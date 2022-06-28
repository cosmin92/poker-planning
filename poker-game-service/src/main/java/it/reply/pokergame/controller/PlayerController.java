package it.reply.pokergame.controller;

import java.net.URI;

import it.reply.pokergame.dto.PlayerDto;
import it.reply.pokergame.dto.PlayerRegistrationDto;
import it.reply.pokergame.model.Tokens;
import it.reply.pokergame.security.CustomUserDetails;
import it.reply.pokergame.security.CustomUserDetailsService;
import it.reply.pokergame.security.jwt.JwtUtil;
import it.reply.pokergame.service.PlayerService;
import it.reply.pokergame.util.Mappers;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping(path = "/players")
public class PlayerController {

    private final PlayerService playerService;
    private final AuthenticationManager authenticationManager;
    private final CustomUserDetailsService customUserDetailsService;

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> registration(@RequestBody PlayerRegistrationDto playerRegistrationDto) {

        URI location = ServletUriComponentsBuilder.fromCurrentRequestUri().path("/{playerId}")
            .buildAndExpand(playerService.registration(
                Mappers.toPlayer(playerRegistrationDto)
            )).toUri();

        return ResponseEntity.created(location).build();
    }

    @PostMapping(path = "/authenticate")
    public ResponseEntity<Tokens> login(@RequestParam("username") String username, @RequestParam("password") String password) {

        authenticate(username, password);

        CustomUserDetails userDetails = (CustomUserDetails) customUserDetailsService.loadUserByUsername(username);
        String access = JwtUtil.createJwtAccessToken(userDetails);
        String refresh = JwtUtil.createJwtRefreshToken(userDetails.getUsername(), userDetails.getId());

        return ResponseEntity.ok(new Tokens(access, refresh, userDetails.getId()));
    }

    private void authenticate(String username, String password) {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
        } catch (DisabledException e) {
            throw new DisabledException("USER_DISABLED", e);
        } catch (BadCredentialsException e) {
            throw new BadCredentialsException("INVALID_CREDENTIALS", e);
        }
    }

    @GetMapping("/{playerId}")
    public ResponseEntity<PlayerDto> getPlayer(@PathVariable("playerId") Long playerId) {

        return playerService.getPlayer(playerId)
            .map(player -> ResponseEntity.ok().body(Mappers.toPlayerDto(player)))
            .orElse(ResponseEntity.notFound().build());
    }

}
