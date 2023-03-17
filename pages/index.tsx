import { Stats } from 'fs'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import ButtonElement from '../components/Button'
import Button from '../components/Button'
import Container from '../components/Container'
import { Box } from '../components/context/Box'
import { ThemeContextProver } from '../components/context/ThemeContextProvider'

import Greating from '../components/Greating'
import Heading from '../components/Heading'
import Input from '../components/Input'
import Oscar from '../components/Oscar'
import PersonList from '../components/PersonList'
import Counter from '../components/state/Counter'
import LoggedIn from '../components/state/LoggedIn'
import User from '../components/state/User'
import Status from '../components/Status'

const userDetails = {
  age: 12,
 userName: "joshua",
//  numberOfLikes: 20
}

const names = [
  {
    firstName:"John",
    lastName:"Smith",
  },
  {
    firstName:"toobi",
    lastName:"sam",
  },
  {
    firstName:"Remi",
    lastName:"Touchi",
  }
]
const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Greating userProfile = { userDetails}  />
      {/* <PersonList userList = {names} /> */}
      <Status status="error" />
      <Heading>
        this is the heading section
      </Heading>
      <Oscar>
      <Heading>
        this is the heading section for the oscar components
      </Heading>
      </Oscar>
      <ButtonElement handleClick={(e,id) => {
        console.log("item clicked")
        console.log(e,id )
      }} />
      <Input value='' onChange={(event) => {
             console.log(event)
      }} />
      <Container style={{border: "2px solid red", padding:"2rem"}}  />
      <LoggedIn />
      <User />
      <Counter />
      <ThemeContextProver>
      <Box />
      </ThemeContextProver>
    </div>
  )
}

export default Home
