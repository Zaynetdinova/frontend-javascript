import React from 'react'

export default function AlertError(props) {
  return (
    <div className="alert alert-danger" role="alert">
      <h4 className="alert-heading">{props.error}</h4>
      <p></p>
      <hr/>
        <p className="mb-0"></p>
    </div>
  )
}
