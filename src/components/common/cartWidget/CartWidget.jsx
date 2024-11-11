import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../../../context/CartContext';
import './cartwidget.css';

const CartWidget = () => {
    const { getTotalQuantity } = useCart();
    const quantity = getTotalQuantity();
    
    if (quantity === 0) return null;
    
    return (
        <div className="cart-widget">
        <FaShoppingCart size={24} />
        <span className="notification">{quantity}</span>
        </div>
    );
};

export default CartWidget;