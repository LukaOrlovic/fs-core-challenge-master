package com.doodle.backend.web.controller;

import com.doodle.backend.model.Message;
import com.doodle.backend.service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class ChatRestController {

    @Autowired
    MessageService messageService;

    @GetMapping("/login")
    public List<Message> sendMessage(){
        return messageService.getAllMessages();
    }
}
