import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

const SupportPopover = () => {
  const [message, setMessage] = useState('');

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:8000/api/contact-us/', { message });
      alert('Message saved successfully!');
      setMessage('');
    } catch (error) {
      console.error('Failed to save message:', error);
      alert('Failed to save message. Please try again.');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label style={{marginLeft:'18px'}}>Message</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={message}
          onChange={handleMessageChange}
          style={{ width: '1500px', margin:'20px' }}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default SupportPopover;
