import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { mockProducts } from '../../mocks/products';

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();
    
    useEffect(() => {
        const fetchProducts = () => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const filteredProducts = categoryId
                    ? mockProducts.filter(product => product.category === categoryId)
                    : mockProducts;
                    resolve(filteredProducts);
                }, 1000);
            });
        };
        
        setLoading(true);
        fetchProducts()
        .then(response => {
            setProducts(response);
            setLoading(false);
        });
    }, [categoryId]);
    
    if (loading) {
        return <Container className="mt-4"><h2>Cargando...</h2></Container>;
    }
    
    return (
        <Container className="mt-4">
        {greeting && <h2 className="mb-4">{greeting}</h2>}
        <Row>
        {products.map(product => (
            <Col key={product.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Card>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>${product.price}</Card.Text>
            <Link 
            to={`/item/${product.id}`}
            className="btn btn-primary"
            >
            Ver detalle
            </Link>
            </Card.Body>
            </Card>
            </Col>
        ))}
        </Row>
        </Container>
    );
};

ItemListContainer.propTypes = {
    greeting: PropTypes.string,
};

export default ItemListContainer;