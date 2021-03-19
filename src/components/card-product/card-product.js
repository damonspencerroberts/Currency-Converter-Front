import React from 'react'

const CardProduct = (props) => {
  return (
    <div className="child">
      <div className="card-product">
          <p>Converted {props.initSymbol}{props.amount} {props.initCur} {props.initFlag}</p>
          <p>To {props.wantedSymbol}{props.convertedAmount} {props.wantedCur} {props.wantedFlag}</p>
          <p>At a rate of {props.rate}</p>
          <p>Created {props.date}</p>
      </div>
    </div>
  )
}

export default CardProduct;

