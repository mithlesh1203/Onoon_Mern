import React from 'react'
import { Col } from 'antd';
import Carousel from 'react-bootstrap/Carousel';
import cashback from '../_Image/cashback.avif'

function OfferSlide() {
  return (
    <>
<Col spam={6}>
<Carousel variant="dark" >
      <Carousel.Item>
        <img
          className="img-fluid w-100"
          src={cashback}
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
</Col>
    </>
  )
}

export default OfferSlide;