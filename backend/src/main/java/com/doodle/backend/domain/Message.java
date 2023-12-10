package com.doodle.backend.domain;

import com.doodle.backend.model.MessageType;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "messages")
public class Message {

    @Id
    private String id;
    private String sender;
    private String text;
    private String timestamp;
    private MessageType type;

    public Message() {
    }
}
