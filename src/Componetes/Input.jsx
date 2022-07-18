import React from 'react'

export const Input = ({placeholder}) => {
  return (
    <>
    <input type="text" style={{margin: "0 auto"}} required placeholder={placeholder}/>
    </>
  )
}
