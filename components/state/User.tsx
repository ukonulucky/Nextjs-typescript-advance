import {useState} from "react"
type AuthUser = {
    name: string,
    email: string
}

export default function User(){
    const [userData, setUserData] = useState<AuthUser  | null>(null)
const handleLogin = () => {
  setUserData({
    name:"James",
    email:"james@gmail.com"
  })
}
const handleLogOut = () => {
  setUserData(null)
}
    return (
        <div>
      <button onClick={handleLogin}>Login User</button>
      <button onClick={handleLogOut}>Handle Logout</button>
     {
        userData ?  <p>my name is {userData?.name} and email is {userData?.email}</p>: null
     }
        </div>
    )

}