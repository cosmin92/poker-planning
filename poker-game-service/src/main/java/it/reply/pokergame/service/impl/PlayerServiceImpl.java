package it.reply.pokergame.service.impl;

import java.util.Optional;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import it.reply.pokergame.exception.ResourceNotFoundException;
import it.reply.pokergame.exception.UniqueConstraintViolationException;
import it.reply.pokergame.model.Player;
import it.reply.pokergame.repository.PlayerRepository;
import it.reply.pokergame.service.PlayerService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
@RequiredArgsConstructor
public class PlayerServiceImpl implements PlayerService {

    private final PlayerRepository playerRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public Long registration(Player player) {
        if (this.existByUsername(player.getUsername())) {
            throw new UniqueConstraintViolationException(Player.class.getName(), player.getUsername());
        }
        player.setActive(true);
        player.setPassword(passwordEncoder.encode(player.getPassword()));
        return playerRepository.save(player).getId();
    }

    @Override
    public Optional<Player> getPlayer(Long playerId) {
        return playerRepository.findById(playerId);
    }

    @Override
    public void updatePlayerRole(Long playerId, String role) {
        Player player = this.getPlayer(playerId).orElseThrow(
            () -> new ResourceNotFoundException(Player.class.getName(), playerId.toString())
        );
        player.setRole(role);
        playerRepository.save(player);
    }

    @Override
    public boolean existByUsername(String username) {
        return playerRepository.existsByUsername(username);
    }
}
