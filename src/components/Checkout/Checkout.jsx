import { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const Checkout = () => {
    const { cart, getTotalPrice, clearCart } = useCart();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: ''
    });
    const [orderStatus, setOrderStatus] = useState({ success: false, error: null });
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const order = {
                buyer: formData,
                items: cart,
                total: getTotalPrice(),
                date: new Date().toISOString()
            };
            
            console.log('Orden generada:', order);
            setOrderStatus({ success: true, error: null });
            clearCart();
            setTimeout(() => navigate('/'), 2000);
        } catch (error) {
            setOrderStatus({ success: false, error: error.message });
        }
    };
    
    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    
    if (cart.length === 0) {
        return (
            <Container className="mt-4">
            <Alert variant="warning">
            No hay items en el carrito para realizar la compra
            </Alert>
            </Container>
        );
    }
    
    return (
        <Container className="mt-4">
        <h2>Checkout</h2>
        {orderStatus.success && (
            <Alert variant="success">
            ¡Orden generada exitosamente! Redirigiendo...
            </Alert>
        )}
        {orderStatus.error && (
            <Alert variant="danger">
            Error al generar la orden: {orderStatus.error}
            </Alert>
        )}
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
        <Form.Label>Nombre completo</Form.Label>
        <Form.Control
        type="text"
        name="name"
        required
        onChange={handleInputChange}
        />
        </Form.Group>
        <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
        type="email"
        name="email"
        required
        onChange={handleInputChange}
        />
        </Form.Group>
        <Form.Group className="mb-3">
        <Form.Label>Teléfono</Form.Label>
        <Form.Control
        type="tel"
        name="phone"
        required
        onChange={handleInputChange}
        />
        </Form.Group>
        <Form.Group className="mb-3">
        <Form.Label>Dirección de envío</Form.Label>
        <Form.Control
        type="text"
        name="address"
        required
        onChange={handleInputChange}
        />
        </Form.Group>
        <div className="d-flex justify-content-between">
        <h4>Total a pagar: ${getTotalPrice()}</h4>
        <Button variant="success" type="submit">
        Confirmar compra
        </Button>
        </div>
        </Form>
        </Container>
    );
};

export default Checkout;