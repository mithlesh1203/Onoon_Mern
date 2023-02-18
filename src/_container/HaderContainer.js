import {connect} from 'react-redux';
import HaderTop from '../_component/_Hader/HaderTop';

const mapStateToProps = (state)=>({
    cartDataStore:state.cartDataStore
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(HaderTop);