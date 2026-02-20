import React from 'react';
import { Navbar, Nav, Container, Button, Badge } from 'react-bootstrap';  // Add Badge here
import { Link, useNavigate } from 'react-router-dom';
import { FaUniversity } from "react-icons/fa"; 

function Navigation({ user, setUser }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    navigate('/login');
  };

  return (
    <Navbar bg="primary" variant="dark" expand="lg" className="shadow">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold fs-3 d-flex align-items-center">
        <FaUniversity className="me-2" size={28} />  
          MyFin Bank
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            {user ? (
              <>
                <Nav.Link as={Link} to="/dashboard" className="text-white">
                  Dashboard
                </Nav.Link>
                
                {user.role === 'admin' ? (
                  <Nav.Link as={Link} to="/admin" className="text-white">
                    Admin Panel
                  </Nav.Link>
                ) : (
                  <Nav.Link as={Link} to="/loans" className="text-white">
                    Loans
                  </Nav.Link>
                )}
                
                <Navbar.Text className="mx-3 text-white">
                  Welcome, <span className="fw-bold">{user.name}</span>
                  {user.role === 'admin' && (
                    <Badge bg="warning" className="ms-2">Admin</Badge>
                  )}
                </Navbar.Text>
                
                <Button 
                  variant="outline-light" 
                  onClick={handleLogout}
                  className="px-4"
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/login" className="text-white">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/register" className="text-white">
                  Register
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;