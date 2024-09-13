import { Navbar, Nav, Container } from 'react-bootstrap';
import CartWidget from '../cartWidget/CartWidget';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
    const categories = ['Nike', 'Adidas', 'Puma', 'New Balance'];
    
    return (
        <Navbar bg="light" expand="lg">
        <Container>
        <Navbar.Brand href="#home">Altas Zapas</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
        {categories.map((category, index) => (
            <Nav.Link key={index} href={`#${category.toLowerCase()}`}>
            {category}
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