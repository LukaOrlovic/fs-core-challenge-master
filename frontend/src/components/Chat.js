import "../App.css";

import React, { useState, useEffect } from 'react';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import { properties } from "../properties/Properties.js";
import MessageList from "./MessageList.js";

function Chat({ isActive, username, ...props }) {

    const [messages, setMessages] = useState([]);
    const [stompClient, setStompClient] = useState(null);

    useEffect(() => {
        setMessages(props.oldMessages);
      }, [props.oldMessages]);

    useEffect(() => {
        const sock = new SockJS(properties.url + properties.ws);
        const stomp = Stomp.over(sock);

        stomp.connect({}, (frame) => {
            setStompClient(stomp);
        });

        return () => {
            if (stomp && stomp.connected) {
                stomp.disconnect();
            }
        };
    }, []);

    useEffect(() => {

        if (stompClient) {
            stompClient.subscribe('/topic/messages', (response) => {
                const newMessages = [...messages, JSON.parse(response.body)];
                setMessages(newMessages);
            });
        }

    }, [messages, stompClient]);

    return (
        <>
            {isActive &&
                ((<>
                    <MessageList messages={messages} username={username} />
                </>))
            }
        </>
    );

}

export default Chat;