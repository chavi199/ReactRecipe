import { useContext } from "react"
import ColorContext from "./ColorContext"

const Color1 = () => {

    const {color, changeColor} = useContext(ColorContext)
debugger
    return(
        <>
       <h3 style={{color}}>Color1</h3> 
        </>
    )
}

export default Color1