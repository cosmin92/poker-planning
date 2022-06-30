package it.reply.pokergame.service;

import org.springframework.stereotype.Service;

import com.google.firebase.messaging.FirebaseMessaging;
import com.google.firebase.messaging.FirebaseMessagingException;
import com.google.firebase.messaging.Message;
import com.google.firebase.messaging.Notification;

import it.reply.pokergame.model.PushNotification;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
@RequiredArgsConstructor
public class FCMService {

    private final FirebaseMessaging firebaseMessaging;

    public String sendNotification(PushNotification note) throws FirebaseMessagingException {

        Notification notification = Notification
            .builder()
            .setTitle(note.getTitle())
            .setBody(note.getMessage())
            .build();

        Message message = Message
            .builder()
            .setToken(note.getToken())
            .setNotification(notification)
            .build();

        return firebaseMessaging.send(message);
    }
}