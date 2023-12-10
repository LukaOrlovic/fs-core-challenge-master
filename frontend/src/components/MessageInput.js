import React, { useState } from 'react';

const MessageInput = ({ onSendMessage }) => {
    const [message, setMessage] = useState('');

    const handleSendMessage = () => {
        if (message.trim() !== '') {
            onSendMessage(message);
            setMessage('');
        }
    };

    return (
        <div class="message-inputs">
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                class="message-input" 
                rows="1"
            />
            <button class="send-button" onClick={handleSendMessage}>Send</button>
        </div>
    );
};

export default MessageInput;