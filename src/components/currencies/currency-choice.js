import React from 'react'
import Currency from "./currency";

const CurrencyChoice = (props) => {
  return (
    <div>
      <Currency 
        label="Choose a base currency:"
        gbp = {props.gbp}
        chf = {props.chf}
        eur = {props.eur}
        usd = {props.usd}
        setChange = {props.setCurrent}
      />
      <Currency 
        label="Choose a conversion currency:"
        gbp = {props.gbp}
        chf = {props.chf}
        eur = {props.eur}
        usd = {props.usd}
        setChange = {props.setChange}
      />
    </div>
  )
}

export default CurrencyChoice;

