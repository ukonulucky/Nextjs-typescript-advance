import React from 'react'
type headingProps = {
    children:String
}
function Heading(props:headingProps) {
  return (
    <div>
        {
         props.children
        }
    </div>
  )
}

export default Heading