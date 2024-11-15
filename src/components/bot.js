// bot.js
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const handleSendMessage = (messages, setMessages, e) => {
    e.preventDefault();
    const message = e.target.elements.message.value;
    if (message.trim() !== '') {
        // Save the input value before updating the state
        const newMessage = { text: message, fromUser: true };
        setMessages([...messages, newMessage]);
        // Add logic here to send message to a chatbot service and receive response
        // For demo purposes, we'll just add a simple response
        setTimeout(() => {
            setMessages([
                ...messages,
                { text: 'Sure, I will assist you.', fromUser: false },
                { text: <Link to="/account">1. Account</Link>, fromUser: false },
                { text: <Link to="/NewArrival">2. New Arrival</Link>, fromUser: false },
                { text: <Link to="/SupportPopover">3. Support</Link>, fromUser: false },
                { text: <Link to="/mobiles">4. Others</Link>, fromUser: false }
            ]);
        }, 500);
        e.target.elements.message.value = '';
    }
};

export default handleSendMessage;
