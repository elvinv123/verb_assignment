import { connect } from 'react-redux';
import Header from './header';

const mapStateToProps = state => ({
    cartAmount: state.cartItems.length
});

export default connect(
    mapStateToProps
)(Header);
