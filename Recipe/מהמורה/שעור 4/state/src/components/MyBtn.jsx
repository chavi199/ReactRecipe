import { useState } from "react"

const MyBtn = (props) => {
    const [str1, setStr1] = useState("")

const changeStr1 = () => {
    setStr1("asads")
}
    return (
        <>
            {/* <button onClick={props.changeStr}>click me</button> */}
            <button onClick={changeStr1}>click me</button>
        </>
    )
}

export default MyBtn