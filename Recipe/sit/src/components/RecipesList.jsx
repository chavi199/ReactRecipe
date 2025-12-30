import { createContext, useContext } from "react"
import RecipesContext from "./recipesContext"

const RecipesList=()=>{
    const {recipes}=useContext(RecipesContext)
    return(
        <>
        {
            recipes.map(r=>(
                <div>
                    <h2>
                        {r.name}
                    </h2>
                    <p>
                        Cooking Duration:<br/>
                        {r.time}
                    </p>
                    <p>
                        Category:<br/>
                        {r.category}
                    </p>
                    {r.favorite&&<p>Marked As Favorite Recipe</p>}
                </div>
            ))
        }
        </>
    )
}

export default RecipesList