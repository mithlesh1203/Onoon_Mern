import { color } from "@mui/system";
import React, { useEffect, useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import { useDispatch } from "react-redux";
import { addToCart, removeToCart } from "../../_service/_Action/action";


function ProductDesription(datas) {
  const dispatch = useDispatch()
  const [productData, setProductData] = useState();
  useEffect(() => {
    setProductData(datas.data)
  }, [])

  return (
    <>
      {productData &&

        <>
          <div>
            <Carousel variant="dark" >
              <Carousel.Item>
                <img
                  className="img-fluid w-100"
                  src={productData.images[0]}
                  alt="First slide"
                />
                <Carousel.Caption>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="img-fluid w-100"
                  src={productData.images[1]}

                  alt="Second slide"
                />
                <Carousel.Caption>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            <div className="product-Model">
              <div className="product-Model-colour">BRAND :-</div>
              <div>{productData.brand}</div>
            </div>
            <div className="product-Model">
              <div
                className="product-Model-colour">TITLE :-</div>
              <div>{productData.title} </div>
            </div>
            <div className="product-Model">
              <div
                className="product-Model-colour">CATOGORY :-</div>
              <div>{productData.category}</div>
            </div>
            <div className="product-Model">
              <div
                className="product-Model-colour">PRICE :-</div>
              <div>Rs. {productData.price}</div>
            </div>

            <div className="product-Model">
              <div
                className="product-Model-colour">DISCOUNT % :-</div>
              <div>{productData.discountPercentage} </div>
            </div>
            <div className="product-Model">
              <div className='btn-wrapper-cart'>
                <button
                  onClick={() => dispatch(addToCart(productData))}
                >AddCart</button>

              </div>
              <div className='btn-wrapper-cart'>
                <button
                  onClick={() => dispatch(removeToCart(productData))}
                >RemoveCart</button>
              </div>
            </div>
          </div>
        </>

      }
    </>

  )

}

export default ProductDesription;