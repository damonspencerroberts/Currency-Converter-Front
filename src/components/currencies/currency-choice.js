import React, { useEffect, useState } from 'react'

const CurrencyChoice = (props) => {
  const [current, setCurrent] = useState({});

  console.log(current);
  return (
    <div>
      <label for="currency">Choose a base currency:</label>

      <select name="currency" id="currency" onChange = {(e) => setCurrent(e.target.value)}>
        <option value={props.gbp.base}>{props.gbp.base}</option>
        <option value={props.chf.base}>{props.chf.base}</option>
        <option value={props.eur.base}>{props.eur.base}</option>
        <option value={props.usd.base}>{props.usd.base}</option>
      </select>
    </div>
  )
}

export default CurrencyChoice;

