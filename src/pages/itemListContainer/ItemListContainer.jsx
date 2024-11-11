import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import ItemList from '../../components/ItemList/ItemList';
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
        return (
            <Container className="mt-4">
                <div className="text-center">
                    <h2>Cargando productos...</h2>
                    {/* Aquí podrías agregar un spinner o skeleton */}
                </div>
            </Container>
        );
    }
    
    return (
        <Container className="mt-4">
            {greeting && <h2 className="mb-4">{greeting}</h2>}
            <ItemList products={products} />
        </Container>
    );
};

ItemListContainer.propTypes = {
    greeting: PropTypes.string,
};

export default ItemListContainer;