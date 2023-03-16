import React from 'react'

type containerProps = {
    style: React.CSSProperties
}
function Container(props:containerProps) {
  return (
    <div style={props.style}> this is a styled component</div>
  )
}

export default Container