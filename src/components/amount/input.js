import React from 'react'
import CurFlags from "../currencies/cur-flags";

const AmountInput = (props) => {
  const chaSymbol = CurFlags.currencies.find(cur => cur.code === props.current);

  return (
    <div>
      <label for="amount">How much would you like to convert? {chaSymbol.symbol} </label>
      <input type="number" onChange = {(e) => props.calculateAmount(e.target.value, props.rate)} />
    </div>
  )
}

export default AmountInput;
