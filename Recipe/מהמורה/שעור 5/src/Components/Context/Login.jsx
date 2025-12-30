import { useContext } from "react"
import MyContext1 from "./MyContext"

const Login = () => {

    const myGlobalVal = useContext(MyContext1)
debugger
    return(
        <>
        <h1>{myGlobalVal}</h1>
        Login
        </>
    )
}

export default Login