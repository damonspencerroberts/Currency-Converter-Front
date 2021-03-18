import React from 'react'

const AmountInput = (props) => {
  return (
    <div>
      <label for="amount">How much would you like to convert?</label>
      <input type="number" onChange = {(e) => props.calculateAmount(e.target.value, props.rate)} />
    </div>
  )
}

export default AmountInput;
