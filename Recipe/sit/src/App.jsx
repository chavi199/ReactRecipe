import React, { Suspense, useState } from 'react'
import './App.css'
import AppBar from './components/AppBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RecipesContext from './components/recipesContext'

// //import ניסוי חדש
// import Home from './components/Home.jsx'
// import RecipesList from './components/RecipesList.jsx'
// import RecipeDetails from './components/RecipeDetails.jsx'
// import Login from './components/Login.jsx'

// const LazyHome=React.lazy(()=>Home)
// const LazyRecipesList=React.lazy(()=>RecipesList)
// const LazyRecipeDetails=React.lazy(()=>RecipeDetails)
// const LazyLogin=React.lazy(()=>Login)

const LazyHome = React.lazy(() => import('./components/Home.jsx'))
const LazyRecipesList = React.lazy(() => import('./components/RecipesList.jsx'))
const LazyRecipeDetails = React.lazy(() => import('./components/RecipeDetails.jsx'))
const LazyLogin = React.lazy(() => import('./components/Login.jsx'))


function App() {
    const [recipes, setRecipes] = useState([
    {
      id: 1111,
      name: "cookies",
      time: 60,
      ingridients: ["eggs", "flour"],
      category: 2,
      favorite: false
    }
  ])
  return (
    <BrowserRouter>
    <RecipesContext.Provider value={{recipes,setRecipes}}>
    <>
      <AppBar/>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<LazyHome/>}></Route>
          <Route path='/RecipesList' element={<LazyRecipesList/>}></Route>
          <Route path='/RecipesList/RecipeDetails/:id' element={<LazyRecipeDetails/>}></Route>
          <Route path='/Login' element={<LazyLogin/>}></Route>
        </Routes>
      </Suspense>
    </>
    </RecipesContext.Provider>
    </BrowserRouter>
  )
}

export default App
