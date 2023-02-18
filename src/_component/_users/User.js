import React from 'react'

function User(props) {
    const {data} = props

  return (
    <div>{data.name}</div>
  )
}

export default User