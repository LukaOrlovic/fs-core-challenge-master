package com.doodle.backend.service;

import com.doodle.backend.model.Message;
import com.doodle.backend.repository.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MessageService {

    @Autowired
    MessageRepository messageRepository;

    public void addMessage(Message messageModel){
        com.doodle.backend.domain.Message messageDomain = new com.doodle.backend.domain.Message();
        messageDomain.setType(messageModel.getType());
        messageDomain.setText(messageModel.getText());
        messageDomain.setSender(messageModel.getSender());
        messageDomain.setTimestamp(messageModel.getTimestamp());
        messageRepository.save(messageDomain);
    }

    public List<Message> getAllMessages(){
        return messageRepository.findAll().stream().map(MessageService::convertToMessageModel).toList();
    }

    private static Message convertToMessageModel(com.doodle.backend.domain.Message m) {
        return new Message(m.getText(), m.getSender(), m.getType(), m.getTimestamp());
    }

    public MessageService() {}
}
