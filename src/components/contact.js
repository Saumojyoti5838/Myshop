import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const ContactUsForm = () => {
  return (
    <Form>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Link to="/ContactUsForm">
      <Button variant="primary" type="submit">
        Submit
      </Button>
      </Link>
    </Form>
  );
};

export default ContactUsForm;
