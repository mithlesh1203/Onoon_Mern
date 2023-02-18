import React, { useState } from 'react';
import { Modal } from 'antd';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.css'
import AddToCartLogo from '../_Image/AddToCartLogo.png';
import onoonLogo from '../_Image/onoonLogo.svg';
import BottomHedar from './BottomHead'
import { useSelector } from 'react-redux';
import Login from '../Auth/Login';
import Signup from '../Auth/Signup';
import Cart from '../_cart/Cart';

function HaderTop() {
    let data = useSelector((state) => state)
    const [modalLogin, setModalLogin] = useState();
    const [modalLoginCheck, setModalLoginCheck] = useState(false);

    const [modalSinUp, setModalSinUp] = useState();
    const [modalSinUpCheck, setModalSinUpCheck] = useState(false);

    const [modalCart, setModalCart] = useState();
    const [modalCartCheck, setModalCartCheck] = useState(false);




    const showModalLogin = (e) => {
        setModalLoginCheck(true);
        setModalLogin(e)
    };
    const showModalSignUp = (datas) => {
        setModalSinUpCheck(true);
        setModalSinUp(datas)
    };

    const showModalCart = (datas) => {
        setModalCartCheck(true);
        setModalCart(datas)
    };
    const handleOk = () => {
        setModalLoginCheck(false);
        setModalSinUpCheck(false);
        setModalCartCheck(false);
    };
    const handleCancel = () => {
        setModalLoginCheck(false);
        setModalSinUpCheck(false);
        setModalCartCheck(false);
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light " style={{ backgroundColor: 'yellow' }}>
                <img
                    alt=''
                    style={{
                        width: "150px",
                        height: "26px",
                    }}
                    src={onoonLogo}
                />
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="navbar-nav ms-auto w-50">
                        <input className="form-control mr-sm-2 " type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-sm-0" type="submit">Search</button>
                    </form>
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/home">Home </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"
                                onClick={(e) => {
                                    showModalLogin(e);
                                }}
                            >Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"
                                onClick={() => {
                                    showModalSignUp('ok');
                                }}
                            >Registation</a>
                        </li>
                        <div >
                            <div style={{
                                marginTop: '20px',
                            }}>
                                <span style={{
                                    position: 'absolute',
                                    right: '14px',
                                    top: '13px',
                                    zIndex: '1',
                                    backgroundColor: 'red',
                                    padding: '2px',
                                    width: '15px',
                                    height: '19px',
                                    borderRadius: '50%',
                                    color: 'black',
                                }}>{data.cartData.length}</span>
                                <a
                                    onClick={() => {
                                        showModalCart('ok');
                                    }}
                                >
                                    <img
                                        alt=''
                                        style={{
                                            width: "20px",
                                        }}
                                        src={AddToCartLogo}

                                    />
                                </a>
                            </div>


                        </div>
                    </ul>
                </div>
                <Modal title="Welcome to Login Page" open={modalLoginCheck} onOk={handleOk} onCancel={handleCancel}>
                    <Login />
                </Modal>
                <Modal title="Welcome to Registation Page" open={modalSinUpCheck} onOk={handleOk} onCancel={handleCancel}>
                    <Signup />
                </Modal>
                <Modal title="Welcome to Cart Page" open={modalCartCheck} onOk={handleOk} onCancel={handleCancel}>
                    <Cart />
                </Modal>
            </nav>
            <BottomHedar />
        </>
    )
}

export default HaderTop