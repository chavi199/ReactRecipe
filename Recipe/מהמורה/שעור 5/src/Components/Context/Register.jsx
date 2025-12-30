import { useContext } from "react"
import MyContext1 from "./MyContext"

const Register = () => {
    const myGlobalVal = useContext(MyContext1)
    return(
        <>
        <h1>{myGlobalVal}</h1>
        Register
        </>
    )
}

export default Register