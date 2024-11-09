import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { mockProducts } from '../../mocks/products';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    
    useEffect(() => {
        const fetchProduct = () => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const foundProduct = mockProducts.find(p => p.id === id);
                    resolve(foundProduct);
                }, 1000);
            });
        };
        
        setLoading(true);
        fetchProduct()
        .then(response => {
            setProduct(response);
            setLoading(false);
        });
    }, [id]);
    
    if (loading) {
        return <Container className="mt-4"><h2>Cargando...</h2></Container>;
    }
    
    if (!product) {
        return <Container className="mt-4"><h2>Producto no encontrado</h2></Container>;
    }
    
    return (
        <Container className="mt-4">
        <Row>
        <Col md={6}>
        <Card>
        <Card.Img variant="top" src={product.image} />
        </Card>
        </Col>
        <Col md={6}>
        <h2>{product.name}</h2>
        <p className="h3 mb-4">${product.price}</p>
        <p>{product.description}</p>
        <p>Stock disponible: {product.stock}</p>
        <button className="btn btn-primary">Agregar al carrito</button>
        </Col>
        </Row>
        </Container>
    );
};

export default ItemDetailContainer;