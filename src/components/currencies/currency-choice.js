import React from 'react'

const currencyChoice = () => {
  return (
    <div>
    <label for="currency">Choose a currency:</label>

    <select name="currency" id="currency">
      <option value="volvo">Volvo</option>
      <option value="saab">Saab</option>
      <option value="mercedes">Mercedes</option>
      <option value="audi">Audi</option>
    </select>
    </div>
  )
}

export default currencyChoice;

