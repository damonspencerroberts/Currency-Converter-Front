import React from 'react'
import AmountInput from "./input";

const Amount = (props) => {
  return (
    <div>
      <AmountInput calculateAmount = {props.calculateAmount} rate = {props.rate} />
      <p>Converted Amount: {props.convertedAmount}</p>
    </div>
  )
}

export default Amount;
