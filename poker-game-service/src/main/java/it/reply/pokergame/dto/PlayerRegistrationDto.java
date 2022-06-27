package it.reply.pokergame.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PlayerRegistrationDto {

    private String username;
    private String password;
    private String role;
}
