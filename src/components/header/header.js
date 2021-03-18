import React from 'react'

const Header = (props) => {
  return (
    <div className="card-header card-border">
      <h1>{props.content}</h1>
    </div>
  )
}

export default Header;


