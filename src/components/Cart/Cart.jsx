import { Container, Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const Cart = () => {
    const { cart, removeItem, clearCart, getTotalPrice } = useCart();
    
    if (cart.length === 0) {
        return (
            <Container className="text-center mt-4">
            <h2>El carrito está vacío</h2>
            <Link to="/" className="btn btn-primary mt-3">
            Volver a la tienda
            </Link>
            </Container>
        );
    }
    
    return (
        <Container className="mt-4">
        <h2>Tu Carrito</h2>
        <Table striped bordered hover>
        <thead>
        <tr>
        <th>Producto</th>
        <th>Cantidad</th>
        <th>Precio unitario</th>
        <th>Subtotal</th>
        <th>Acciones</th>
        </tr>
        </thead>
        <tbody>
        {cart.map(item => (
            <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.quantity}</td>
            <td>${item.price}</td>
            <td>${item.price * item.quantity}</td>
            <td>
            <Button 
            variant="danger" 
            size="sm"
            onClick={() => removeItem(item.id)}
            >
            Eliminar
            </Button>
            </td>
            </tr>
        ))}
        </tbody>
        <tfoot>
        <tr>
        <td colSpan="3" className="text-end"><strong>Total:</strong></td>
        <td colSpan="2"><strong>${getTotalPrice()}</strong></td>
        </tr>
        </tfoot>
        </Table>
        <div className="d-flex justify-content-between">
        <Button variant="outline-danger" onClick={clearCart}>
        Vaciar carrito
        </Button>
        <Link to="/checkout" className="btn btn-success">
        Finalizar compra
        </Link>
        </div>
        </Container>
    );
};

export default Cart;