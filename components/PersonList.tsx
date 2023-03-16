import React from 'react'

type PersonListProps ={
    userList: {
        firstName: string,
        lastName: string
    }[]
}

function PersonList(props:PersonListProps) {
  return (
    <div>{
        props.userList.map( i => (
           <div key={i.firstName}>
             <h2>{i.firstName}</h2>
            <h3>{i.lastName}</h3>
           </div>
        ))
        }</div>
  )
}

export default PersonList