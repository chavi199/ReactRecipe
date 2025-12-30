const MyEvents = () => {

    const createAlert = () => {
        alert("my alert")
    }

    const getId = (id) => {
        alert("id:" + id)
    }

    return (
        <>
            <button onClick={createAlert}>click me</button>
            <button onClick={() => alert("my alert")}>click me</button>
            <button onClick={() => getId(1)}>click me</button>

            <input onChange={(event)=>console.log(event.target.value)}/>
        </>
    )
}

export default MyEvents