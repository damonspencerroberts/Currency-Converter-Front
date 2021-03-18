import React from 'react'

const Button = (props) => {
  return (
    <div className="card-button">
      <button onClick = {props.click}>Save!</button>
    </div>
  )
}

export default Button;
