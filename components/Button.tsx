import React from 'react'
type buttonProps = {
    handleClick: (event:React.MouseEvent<HTMLButtonElement>,id: number) => void
}
function ButtonElement(props: buttonProps) {
  return (
   <div>
     <button onClick={(event) => {
        props.handleClick(event, 20)
     }}>
    click the button
    </button>
   </div>
  )
}

export default ButtonElement