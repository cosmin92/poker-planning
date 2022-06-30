package it.reply.pokergame.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PushNotification {

    private String title;
    private String message;
    private String topic;
    private String token;

}