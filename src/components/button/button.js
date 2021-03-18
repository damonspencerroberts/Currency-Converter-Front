import React from 'react'

const Button = (props) => {
  return (
    <div>
      <button onClick = {props.click}>Save!</button>
    </div>
  )
}

export default Button;
