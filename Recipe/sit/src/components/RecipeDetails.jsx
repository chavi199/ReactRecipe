import { useContext, useEffect } from "react"
import { useParams } from "react-router-dom"
import RecipesContext from "./recipesContext"

const RecipeDetails=()=>{
    // const updateFavorite=(rec)=>{
    //     rec.favorite=true
    // }
    const {id}=useParams()

    const {recipes,setRecipes}=useContext(ObjectsContext)
    const [rec,setRec]=useState(null)

    useEffect(()=>{
        const recipe = recipes.find(r => r.id === Number(id))
        setRec(recipe)
    },[id,recipes])

    // const {recipes,setRecipes}=useContext(RecipesContext)
    // const rec=recipes.find(r=>r.id===Number(id))

    return(
        <>
            {rec&&<div>

                    {rec.favorite&&<p>Marked As Favorite Recipe</p>}
                <h1>{rec.name}</h1>
                <p>
                    Cooking Duration:<br/>
                    {rec.time}
                </p>
                <p>
                    Category:<br/>
                    {rec.category}
                </p>
                <ul>
                    {rec.ingridients}
                </ul>
                {rec.favorite&&<p>Marked As Favorite Recipe</p>}
                {/* <button onClick={()=>updateFavorite(rec)}>Mark As Favorite</button> */}
            </div>
            }
        </>
    )
}

export default RecipeDetails