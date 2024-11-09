import { Link, NavLink } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import CartWidget from '../cartWidget/CartWidget';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
    const categories = [
        { id: 'nike', name: 'Nike' },
        { id: 'adidas', name: 'Adidas' },
        { id: 'puma', name: 'Puma' },
        { id: 'new-balance', name: 'New Balance' }
    ];
    
    return (
        <Navbar bg="light" expand="lg">
        <Container>
        <Navbar.Brand as={Link} to="/">Altas Zapas</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
        {categories.map((category) => (
            <Nav.Link
            key={category.id}
            as={NavLink}
            to={`/category/${category.id}`}
            >
            {category.name}
            </Nav.Link>
        ))}
        </Nav>
        <CartWidget />
        </Navbar.Collapse>
        </Container>
        </Navbar>
    );
};

export default NavBar;