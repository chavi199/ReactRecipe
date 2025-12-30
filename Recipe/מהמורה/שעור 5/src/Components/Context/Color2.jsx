import { useContext } from "react"
import ColorContext from "./ColorContext"

const Color2 = () => {
    const {color, changeColor} = useContext(ColorContext)
debugger
    return(
        <>
       <h3 style={{color}}>Color2</h3> 
       <button onClick={changeColor}>change color</button>
        </>
    )
}

export default Color2