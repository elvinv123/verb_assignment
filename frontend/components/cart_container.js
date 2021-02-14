import { connect } from 'react-redux';
import { addToCart, clearCart, removeItem } from '../actions';
import Cart from './cart';

const mapStateToProps = state => ({
    cartItems: JSON.parse(localStorage.getItem('cart')),
    items: state.items
});

const mapDispatchToProps = dispatch => ({
    addToCart: (item) => dispatch(addToCart(item)),
    removeItem: (item) => dispatch(removeItem(item)),
    clearCart: () => dispatch(clearCart())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cart);
