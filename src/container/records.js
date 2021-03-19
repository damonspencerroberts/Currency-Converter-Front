import React from 'react'
import Header from '../components/header/header';
import CardProduct from '../components/card-product/card-product';

const Records = () => {
  return (
    <div class="record">
      <Header content = "Previous Conversions" />
      <div className="parent">
        <CardProduct />
      </div>
    </div>
  )
}

export default Records;
