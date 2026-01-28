import RecipeArr from '../Context/RecipesContext'
import React,{useContext,useEffect,useState} from 'react'
import { useParams } from "react-router-dom"


const  RecipeDetails=()=>{
    const {id}=useParams()
    const {recipes,setRecipes}=useContext(RecipeArr)
    const [rec,setRec]=useState(null)
    useEffect(()=>{
        setRec(recipes.find(r => r.id === Number(id)))
    },[id,recipes])
   
    return <p style={{ textAlign:'center',border: "1px solid red" }}>
        {rec.favorite}&&<p>
           is a favorite recipe
        </p>
        <p>
            name:{rec.name}
        </p>
        <p>
           time:{rec.time}
        </p>
        <p>
           category:{rec.category}
        </p>
        <p>
        ingridients:{rec.ingridients}
        </p>
        </p>
 }
 export default RecipeDetails