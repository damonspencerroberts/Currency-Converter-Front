import React from 'react'
import AmountInput from "./input";
import CurFlags from "../currencies/cur-flags";

const Amount = (props) => {
  const chaSymbol = CurFlags.currencies.find(cur => cur.code === props.change);
  return (
    <div>
      <AmountInput calculateAmount = {props.calculateAmount} rate = {props.rate} current = {props.current} />
      <div className="card__information">
        <p>Converted Amount: </p> 
        <p>{chaSymbol.symbol} {props.convertedAmount}</p>
      </div>
    </div>
  )
}

export default Amount;
