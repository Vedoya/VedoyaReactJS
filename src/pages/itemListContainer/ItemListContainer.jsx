import PropTypes from 'prop-types';
import { Container, Alert } from 'react-bootstrap';

const ItemListContainer = ({ greeting }) => {
    return (
        <Container className="mt-4">
        <Alert variant="info">
        <h2>{greeting}</h2>
        </Alert>
        </Container>
    );
};

ItemListContainer.propTypes = {
    greeting: PropTypes.string.isRequired,
};

export default ItemListContainer;