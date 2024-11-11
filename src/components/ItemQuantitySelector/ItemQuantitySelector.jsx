import { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, InputGroup, Form } from 'react-bootstrap';

const ItemQuantitySelector = ({ stock, initial = 1, onQuantityChange }) => {
    const [quantity, setQuantity] = useState(initial);
    
    const handleIncrement = () => {
        if (quantity < stock) {
            setQuantity(prev => prev + 1);
            onQuantityChange(quantity + 1);
        }
    };
    
    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(prev => prev - 1);
            onQuantityChange(quantity - 1);
        }
    };
    
    return (
        <InputGroup className="mb-3" style={{ maxWidth: '150px' }}>
        <Button variant="outline-secondary" onClick={handleDecrement}>-</Button>
        <Form.Control 
        className="text-center" 
        value={quantity} 
        readOnly
        />
        <Button variant="outline-secondary" onClick={handleIncrement}>+</Button>
        </InputGroup>
    );
};

ItemQuantitySelector.propTypes = {
    stock: PropTypes.number.isRequired,
    initial: PropTypes.number,
    onQuantityChange: PropTypes.func.isRequired,
};

export default ItemQuantitySelector;