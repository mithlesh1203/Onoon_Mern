import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../../App.css';
import CartImg from '../_Image/CartImg.jpeg';
import { addToCart , removeToCart} from '../../_service/_Action/action';
import FooterUI from '../footer/FooterUI'
import HeaderTop from '../_Hader/HaderTop'


function Cart() {
    const dispatch = useDispatch()
    let data = useSelector((state)=>state)
    const product ={
        price: 100,
        name: `IPhone 14`
    }
    return (
        <div>
            <h1>CartComponent</h1>
            {/* <div className='cart-wrapper'>
                <div className='img-wrapper item'>
                    <img src={CartImg} alt='' />
                </div>
                <div className='text-wrapper item'>
                    <span>
                        I Phone
                    </span>
                    <span>
                        Price: $10.00
                    </span>
                </div>
                <div className='btn-wrapper item'>
                    <button
                        onClick={() => dispatch(addToCart(product))}
                    >Add Cart</button>
               
                </div>
                <div className='btn-wrapper item'>
                <button
                        onClick={() => dispatch(removeToCart(product))}
                    >Remove Cart</button>
                </div>
            </div> */}
            {/* <FooterUI /> */}
        </div>
    )
}

export default Cart