import { useParams } from "react-router-dom"


const BookDetails = () => {
    //אנחנו מקבלות את האוביקט דרך הפונקציה הנ"ל
// const myParams = useParams()

//חילוץ הפרמטר מתוך האוביקט בשורת ההגדרה
const {Id} = useParams()
debugger
    return(
        <>
        <h3>{Id}</h3>
        </>
    )
}

export default BookDetails