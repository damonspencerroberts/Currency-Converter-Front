import React from 'react'
import Currency from "./currency";

const CurrencyChoice = (props) => {
  return (
    <div>
      <Currency 
        label="Choose a base currency:"
        cur = {props.cur}
        setChange = {props.setCurrent}
      />
      <Currency 
        label="Choose a conversion currency:"
        cur = {props.cur}
        setChange = {props.setChange}
      />
    </div>
  )
}

export default CurrencyChoice;

