import React from 'react'
import CurFlags from "../currencies/cur-flags";

const AmountInput = (props) => {
  const chaSymbol = CurFlags.currencies.find(cur => cur.code === props.current);

  return (
    <div className="card__information">
      <label for="amount">How much would you like to convert?</label>
      <div class="card__information-inputs">
        <div className="card-sm-padding">{chaSymbol.symbol}</div>
        <input class="card-amount__input" type="number" onChange = {(e) => props.calculateAmount(e.target.value, props.rate)} />
      </div>
    </div>
  )
}

export default AmountInput;
