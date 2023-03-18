import React, { useRef, useEffect } from 'react'

const inputRef =useRef<HTMLInputElement>(null)

useEffect(() => {

inputRef.current?.focus()
 
}, [])


function Dom() {
  return (
    <div>
        <input type="text" ref={inputRef} />
    </div>
  )
}

export default Dom