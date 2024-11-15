// Chatbot.js
import React, { useState } from 'react';
import img1 from './images/chatbot.png';
import  handleSendMessage  from './bot';


const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);

    const toggleChatbot = () => {
        if (!isOpen) {
            // Add a greeting message when chatbot is opened
            setMessages([...messages, { text: 'Hello! How can I help you today?', fromUser: false }]);
        }
        setIsOpen(!isOpen);
    };

    return (
        <div>
            {isOpen && (
                <div
                    style={{
                        position: 'fixed',
                        bottom: 20,
                        right: 20,
                        background: '#f8f9fa',
                        border: '1px solid #ddd',
                        borderRadius: 10,
                        padding: 10,
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                        maxWidth: 300,
                        maxHeight: 400,
                        overflowY: 'scroll',
                    }}
                >
                    {messages.map((message, index) => (
                        <div key={index} style={{ marginBottom: 10, padding: 5, borderRadius: 5, maxWidth: '70%', alignSelf: message.fromUser ? 'flex-end' : 'flex-start', background: message.fromUser ? '#dcf8c6' : '#fff', color: message.fromUser ? '#000' : '#333', boxShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>
                            {message.text}
                        </div>
                    ))}
                    <form onSubmit={(e) => handleSendMessage(messages, setMessages, e)}>
                        <input
                            type="text"
                            name="message"
                            placeholder="Type your message..."
                            style={{
                                width: '100%',
                                padding: 10,
                                borderRadius: 5,
                                border: '1px solid #ddd',
                                marginBottom: 5,
                                resize: 'none',
                            }}
                        />
                        <button
                            type="submit"
                            style={{
                                background: '#128C7E',
                                color: '#fff',
                                border: 'none',
                                borderRadius: 5,
                                padding: '5px 10px',
                                cursor: 'pointer',
                            }}
                        >
                            Send
                        </button>
                    </form>
                </div>
            )}
            <span
                onClick={toggleChatbot}
                style={{
                    position: 'fixed',
                    bottom: 10,
                    right: 10,
                    background: '#007bff',
                    color: '#fff',
                    borderRadius: '50%',
                    padding: '10px 15px',
                    cursor: 'pointer',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                }}
            >
                <img src={img1} alt="Chatbot" style={{ width: 30, height: 30 }} />
            </span>
        </div>
    );
};

export default Chatbot;
