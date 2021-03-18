import React from 'react'

const Rate = (props) => {
  return (
    <div className="card__information">
      <p>Rate:</p> 
      <p>{props.rate}</p>
    </div>
  )
}

export default Rate
