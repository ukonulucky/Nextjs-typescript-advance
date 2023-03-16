import React from 'react'
import { userData } from './Person.types'
 type greetProp = {
  userProfile: userData
 }


function Greating(props:greetProp) {
  const {numberOfLikes = 0} = props.userProfile
  return (
    <div>welcome Mr. {props.userProfile.userName} you are {props.userProfile.age}years old, with a number of likes {numberOfLikes}</div>
  )
}

export default Greating