import PropTypes from 'prop-types';
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ItemList.css';

const ItemList = ({ products }) => {
    return (
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {products.map(product => (
            <Col key={product.id}>
            <Card className="h-100 shadow-sm">
            <div className="position-relative" style={{ paddingTop: '100%' }}>
            <Card.Img
            variant="top"
            src={product.image}
            alt={product.name}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover'
            }}
            />
            </div>
            <Card.Body className="d-flex flex-column">
            <Card.Title className="h5">{product.name}</Card.Title>
            <Card.Text className="text-primary mb-2">
            ${product.price.toLocaleString()}
            </Card.Text>
            <Card.Text className="small text-muted mb-3">
            Stock: {product.stock}
            </Card.Text>
            <Link 
            to={`/item/${product.id}`}
            className="btn btn-primary mt-auto"
            >
            Ver detalle
            </Link>
            </Card.Body>
            </Card>
            </Col>
        ))}
        </Row>
    );
};

ItemList.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            image: PropTypes.string.isRequired,
            stock: PropTypes.number.isRequired,
        })
    ).isRequired,
};

export default ItemList;