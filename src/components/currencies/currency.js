import React from 'react'

const Currency = (props) => {
  return (
    <div>
      <label for="currency">{props.label}</label>

      <select name="currency" id="currency" onChange = {(e) => props.setChange(e.currentTarget.value)}>
        <option value={props.gbp.base}>{props.gbp.base}</option>
        <option value={props.chf.base}>{props.chf.base}</option>
        <option value={props.eur.base}>{props.eur.base}</option>
        <option value={props.usd.base}>{props.usd.base}</option>
      </select>
    </div>
  )
}

export default Currency
