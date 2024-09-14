import { FaShoppingCart } from 'react-icons/fa';
import './cartwidget.css';

const CartWidget = () => {
    return (
        <div className="cart-widget">
        <FaShoppingCart size={24} />
        <span className="notification">6</span>
        </div>
    );
};

export default CartWidget;