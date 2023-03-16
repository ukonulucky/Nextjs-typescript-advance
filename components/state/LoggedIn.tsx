import { useState } from "react"

export const LoggedIn = () =>{
    const [userLoggedIn, setUserLoggedIn] = useState(false)
const handleLogin = () => {
  setUserLoggedIn(true)
}

const handleLogOut = () => {
  setUserLoggedIn(false)
}


return (
    <div>
        <button onClick={handleLogin}>log in</button>
        <button onClick={handleLogOut}>Log Out</button>
        {
          userLoggedIn ? "user is logged in": "User is not logged In"
        }
    </div>
)


}

export default LoggedIn