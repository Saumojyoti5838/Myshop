import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import SupportPopover from './support'; // Import the SupportPopover component
import './header.css';
import { Link } from 'react-router-dom';
import VoiceAssistant from './Voice';

function NavigationBar() {
  const [darkMode, setDarkMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [showSupport, setShowSupport] = useState(false); // State to control support display

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
   
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const searchValue = searchTerm.toLowerCase();
    if (searchValue === 'mobiles' || searchValue === 'mob') {
      window.location.href = '/mobiles';
    } else if (searchValue === 'watches' || searchValue === 'wat') {
      window.location.href = '/watches';
    } else if (searchValue === 'earphones' || searchValue === 'ear') {
      window.location.href = '/earphones';
    } else if (searchValue === 'accessories' || searchValue === 'access') {
      window.location.href = '/accessories';
    } else {
      // Prompt the user for a valid input
      const input = window.prompt('Invalid input. Please enter a valid search term (e.g., mobiles, watches, earphones, accessories):');
      if (input) {
        setSearchTerm(input.toLowerCase());
      }
    }
  };
  

  const closeSupportPopover = () => {
    setShowSupport(false);
  };

  return (
    <header>
      <Navbar bg={darkMode ? 'dark' : 'red'} variant={darkMode ? 'dark' : 'light'} expand="lg" className='nav'>
        <Navbar.Brand href="#home">StudioKart</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/" onClick={closeSupportPopover} className='hom'>Home</Nav.Link>
            <Nav.Link as={Link} to="/NewArrival" onClick={closeSupportPopover} className='new'>New Arrival</Nav.Link>
            <NavDropdown title="Support" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/SupportPopover" className='us'>ContactUs</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Account" id="basic-nav-dropdown" className='pro'>
              <NavDropdown.Item as={Link} to="/account">Profile</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/account">Sign Up</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/account">Log Out</NavDropdown.Item>
              
            </NavDropdown>
            <Nav.Link as={Link} to="/cart" onClick={closeSupportPopover} className='cart'><span role="img" aria-label="cart">🛒</span>
Cart</Nav.Link>
          
          </Nav>
          <Form inline className='form' onSubmit={handleSearch}>
  <div style={{ position: 'relative', width: '100%' }}>
    <FormControl
      type="text"
      placeholder="Search"
      className="mr-sm-2"
      style={{ height: '40px', width: '400px', fontSize: '1rem' }} // Adjust height and font size as needed
      onChange={(e) => setSearchTerm(e.target.value)}
    />
    <div style={{ position: 'absolute', right: '13px', top: '70%', transform: 'translateY(-50%)' }}>
      <VoiceAssistant />
    </div>
  </div>
  <Button variant="outline-light" type="submit">Search</Button>
</Form>

        </Navbar.Collapse>
        <Button variant={darkMode ? 'outline-light' : 'outline-primary'} onClick={toggleDarkMode} className="rounded-pill">
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </Button>
      </Navbar>
      {showSupport && <SupportPopover />}
    </header>
  );
}

export default NavigationBar;
