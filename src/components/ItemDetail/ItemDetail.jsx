import { useState } from 'react';
import { Card, Button, Container, Row, Col, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useCart } from '../../context/CartContext';
import ItemQuantitySelector from '../ItemQuantitySelector/ItemQuantitySelector';

const ItemDetail = ({ product }) => {
    const [quantity, setQuantity] = useState(1);
    const [selectedImage, setSelectedImage] = useState(product.images[0]);
    const { addItem } = useCart();
    const navigate = useNavigate();
    
    const handleAddToCart = () => {
        addItem(product, quantity);
        navigate('/cart');
    };
    
    return (
        <Container className="py-4">
        <Row className="justify-content-center">
        <Col md={8} lg={10}>
        <Card>
        <Row className="g-0">
        <Col md={6}>
        <div className="position-relative">
        <Image 
        src={selectedImage} 
        alt={product.name}
        className="img-fluid rounded"
        style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
        />
        {/* Miniaturas de imágenes */}
        <div className="d-flex gap-2 mt-3 justify-content-center">
        {product.images.map((img, index) => (
            <Image
            key={index}
            src={img}
            alt={`${product.name} ${index + 1}`}
            style={{ 
                width: '60px', 
                height: '60px', 
                objectFit: 'cover', 
                cursor: 'pointer',
                border: selectedImage === img ? '2px solid #007bff' : '1px solid #dee2e6'
            }}
            onClick={() => setSelectedImage(img)}
            className="rounded"
            />
        ))}
        </div>
        </div>
        </Col>
        <Col md={6}>
        <Card.Body className="d-flex flex-column h-100">
        <Card.Title className="h3 mb-3">{product.name}</Card.Title>
        <Card.Text className="h4 text-primary mb-4">
        ${product.price.toLocaleString()}
        </Card.Text>
        <Card.Text className="mb-4">{product.description}</Card.Text>
        <div className="mt-auto">
        <Card.Text className="mb-3">
        Stock disponible: {product.stock}
        </Card.Text>
        <ItemQuantitySelector
        stock={product.stock}
        initial={1}
        onQuantityChange={setQuantity}
        />
        <Button 
        variant="primary" 
        onClick={handleAddToCart}
        disabled={!product.stock}
        className="w-100 mt-3"
        >
        Agregar al carrito
        </Button>
        </div>
        </Card.Body>
        </Col>
        </Row>
        </Card>
        </Col>
        </Row>
        </Container>
    );
};

ItemDetail.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        stock: PropTypes.number.isRequired,
    }).isRequired,
};

export default ItemDetail;