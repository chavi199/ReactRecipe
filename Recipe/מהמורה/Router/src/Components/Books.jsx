import { Link, Outlet } from "react-router-dom"

const Books = () => {
    const arrBooks = [{id:1,name:"aaa"},{id:2,name:"bbb"},{id:3,name:"cccc"}]
    return(
        <>
        Books<br/>
        {/* <Link to={'/Books/createBook'}>create new book</Link><br /> */}
{
    arrBooks.map((book)=>(
        <p style={{border:"2px solid red"}}>
            <Link to={`/Books/${book.id}`}>
            {book.name}
            </Link>
        </p>
    ))
}
    <Outlet/>
        
        </>
    )
}

export default Books