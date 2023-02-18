import { connect } from 'react-redux';
import Cart from '../_component/_cart/Cart';
import { addToCart, removeToCart } from '../_service/_Action/action'

const mapStateToProps = (state) => ({
    cartData: state.cartData
})

const mapDispatchToProps = (dispatch) => ({
    addToCartHandler: data => dispatch(addToCart(data)),
    removeToCartHandler: data => dispatch(removeToCart(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart);