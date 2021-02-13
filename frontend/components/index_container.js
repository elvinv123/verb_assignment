import { connect } from 'react-redux';
import { addToCart, clearCart } from '../actions';
import Index from './index';

const mapStateToProps = state => ({
  cartItems: state.cartItems,
  items: state.items
});

const mapDispatchToProps = dispatch => ({
  addToCart: () => dispatch(addToCart()),
  clearCart: () => dispatch(clearCart())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);
