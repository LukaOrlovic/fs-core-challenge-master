package com.doodle.backend.web.controller;

import com.doodle.backend.model.Message;
import com.doodle.backend.service.MessageService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import static com.doodle.backend.LogCodes.SEND_MESSAGE;

@Controller
@Slf4j
public class ChatSocketController {

    @Autowired
    MessageService messageService;

    @MessageMapping("/chat.sendMessage")
    @SendTo("/topic/messages")
    public Message sendMessage(@Payload Message chatMessage){
        log.info(SEND_MESSAGE);
        LocalDateTime timestamp = LocalDateTime.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd MMM yyyy HH:mm");
        String formattedTimestamp = timestamp.format(formatter);

        chatMessage.setTimestamp(formattedTimestamp);
        messageService.addMessage(chatMessage);
        return chatMessage;
    }
}
