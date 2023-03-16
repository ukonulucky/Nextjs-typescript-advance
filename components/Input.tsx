import React from 'react'

type inputProps = {
    value: string,
    onChange: (event:React.ChangeEvent<HTMLInputElement>) => void
}

function Input(props: inputProps) {
  return (
    <div>
        <input value= {props.value} onChange={props.onChange}  />
    </div>
  )
}

export default Input