import "../App.css";

import React, { useEffect, useRef } from 'react';
import Message from './Message';
import NoMessages from './NoMessages';

const MessageList = ({ messages, username }) => {
    const messagesEndRef = useRef(null);

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div style={{marginBottom: '3%'}}>
            {messages.length === 0 ? <NoMessages/> : messages.map((msg, index) => (
                <Message key={index} message={msg} isUsersMessage={msg.sender === username} />
            ))}
            <div ref={messagesEndRef} />
        </div>
    );
};

export default MessageList;