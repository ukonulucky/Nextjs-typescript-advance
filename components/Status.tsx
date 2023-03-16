import React from 'react'


type statusProps = {
    status: "success" | "error" | "loading"
}
function Status(props: statusProps) {
  return (
   <div>
     {
      props.status === "success" ? <p>
      success</p> : (
        props.status === "loading" ? <p>loading items</p> : <p>error section</p>
      )

    }
   </div>
  )
}

export default Status