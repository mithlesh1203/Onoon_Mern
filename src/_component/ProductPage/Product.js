import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Row, Col, Modal } from 'antd';
import Carousel from 'react-bootstrap/Carousel';
import FooterUI from '../footer/FooterUI'
import ProductDesription from './ProductDesription';




function Product() {
  const [isData, setIsData] = useState();
  const [productDiscription, setProductDiscription] = useState(false);
  const [productDiscriptionData, setProductDiscriptionData] = useState();


  useEffect(() => {
    getAPIData()
  }, []);


  const getAPIData = () => {
    axios.get("https://dummyjson.com/products")
      .then((res) =>
        setIsData(res.data.products)
      )
      .catch((error) => console.log("🚀 ~ file: App.js:18 ~ useEffect ~ response", error));
  }

  const showModal = (datas) => {
    setProductDiscription(true);
    setProductDiscriptionData(datas)
  };
  const handleOk = () => {
    setProductDiscription(false);
  };
  const handleCancel = () => {
    setProductDiscription(false);
  };

  return (
    <>
      <Row span={20}  >
        {isData &&
          isData.map((datas) => {
            const { id, category, description, discountPercentage, images, price, rating, stock, title, thumbnail } = datas;
            return (

              <>
                <Col span={5} type='grid-auto-rows: auto' style={{ backgroundColor: '#fbfaff', margin: '2%', borderRadius: '5%' }} key={datas.id}
                  onClick={() => {
                    showModal(datas);
                  }}
                >


                  <Row type='flex' style={{ height: '500px' }}>
                    <Col >
                      <Carousel variant="dark" >
                        <Carousel.Item>
                          <img
                            className="img-fluid w-100"
                            src={images[0]}
                            alt="First slide"
                          />
                          <Carousel.Caption>
                          </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                            className="img-fluid w-100"
                            src={images[1]}

                            alt="Second slide"
                          />
                          <Carousel.Caption>
                          </Carousel.Caption>
                        </Carousel.Item>
                      </Carousel>
                    </Col>
                    <Col>
                      <ul>
                        <h4>
                          <li>
                            {title}
                          </li>
                        </h4>
                        <h4>
                          <li>
                            `₹ ${price}`
                          </li>
                        </h4>
                        <h4>
                          <li>
                            ` Rating ${rating}`
                          </li>
                        </h4>
                      </ul>
                    </Col>
                  </Row>
                </Col>
              </>


            )
          })
        }
        <Modal title="Basic Modal" open={productDiscription} onOk={handleOk} onCancel={handleCancel}>
          <ProductDesription data={productDiscriptionData} />
        </Modal>
      </Row>
      <FooterUI />
    </>
  )
}

export default Product;