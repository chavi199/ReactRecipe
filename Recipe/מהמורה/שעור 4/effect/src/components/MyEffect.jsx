import { useEffect, useState } from "react"


const MyEffect = () => {
    const [name, setName] = useState(null)
    const [age, setAge] = useState(null)
    ///////////////1////////////
    // useEffect(()=>{
    //     console.log(123);
    // },[])

    ///////////////2//////////// 
    // useEffect(() => {
    //     if (name !== null 
    //         || age !== null) {
    //         debugger
    //         console.log(name);
    //     }
    // }, [name, age])

    ///////////////3//////////// 
    // useEffect(()=>{
    //         console.log(123);
    //     })
    return (
        <>
            MyEffect<br />
            <button onClick={() => setName("aaa")}>click me</button>
            <button onClick={() => setAge(12)}>click me age</button>
            </>
    )
}

export default MyEffect