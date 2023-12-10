import "../App.css";

import React from 'react';

const Message = ({ message, isUsersMessage }) => {
    return (
        <div className={isUsersMessage ? 'users-message' : 'container'}>
            <p style={{ fontWeight: "lighter"}}>{isUsersMessage ? "You" : message.sender}</p>
            <p style={{ fontWeight: "bold"}}> {message.text}</p>
            <p class="lighttext">{message.timestamp}</p>
        </div>
    );
};

export default Message;
