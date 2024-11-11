import { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    
    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart(prev => [...prev, { ...item, quantity }]);
        } else {
            setCart(prev => prev.map(prod => 
                prod.id === item.id 
                ? { ...prod, quantity: prod.quantity + quantity }
                : prod
            ));
        }
    };
    
    const removeItem = (itemId) => {
        setCart(prev => prev.filter(item => item.id !== itemId));
    };
    
    const clearCart = () => {
        setCart([]);
    };
    
    const isInCart = (itemId) => {
        return cart.some(item => item.id === itemId);
    };
    
    const getTotalQuantity = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    };
    
    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    };
    
    const value = {
        cart,
        addItem,
        removeItem,
        clearCart,
        isInCart,
        getTotalQuantity,
        getTotalPrice
    };
    
    return (
        <CartContext.Provider value={value}>
        {children}
        </CartContext.Provider>
    );
};

CartProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export const useCart = () => {
    return useContext(CartContext);
};