import logo from './logo.svg';
import './App.css';
import React, { Suspense } from 'react';
import { Link, Route, Routes, UNSAFE_createClientRoutesWithHMRRevalidationOptOut } from 'react-router-dom'
const LazyHome = React.lazy(()=> import('./Components/Home'))
const LazyAppBar = React.lazy(()=> import('./Components/AppBar'))
const LazyLogin = React.lazy(()=> import('./Components/Login'))
const LazyRecipeDetails = React.lazy(()=> import('./Components/RecipeDetails'))
const LazyRecipeList = React.lazy(()=> import('./Components/RecipeList'))
// const Lazyregistratione = React.lazy(()=> import('./Components/registration'))
// const LazyErrorPage = React.lazy(()=> import('./'))
import RecipeArr from './Context/RecipesContext';

function App (){
  const rec={
    id:5,
    name:'chavi',
    time: 5


  }
  return (
   
    <RecipeArr.Provider value={rec}>
   <p style={{ textAlign:'center',border: "1px solid red" }}>
          
           <Link to={'/'}>Home</Link><br />
           <Link to={'/AppBar'}>AppBar</Link><br />
           <Link to={'/Login'}>Login</Link><br />
           <Link to={'/RecipeList'}>RecipeList</Link><br />
         

         </p>
         <Routes>
           <Route path='/' element={<Suspense fallback={"loading..."}><LazyHome /></Suspense> } />
           {/* <Route path='*' element={<Suspense fallback={"loading..."}><LazyErrorPage /></Suspense>} /> */}
           <Route path='/AppBar' element={<Suspense fallback={"loading..."}><LazyAppBar /></Suspense>} />
           <Route path='/Login' element={<Suspense fallback={"loading..."}><LazyLogin /></Suspense>} />

            <Route path='/RecipeList' element={<Suspense fallback={"loading..."}><LazyRecipeList /></Suspense>}>
             {/* <Route path='RecipeDetails' element={<Suspense fallback={"loading..."}><LazyRecipeDetails /></Suspense>} /> */}
              <Route path=':Id' element={<Suspense fallback={"loading..."}><LazyRecipeDetails /></Suspense>} />
             {/* <Route path=':Id/:name' element={<Suspense fallback={"loading..."}><LazyDetailsByName /></Suspense>} />  */}
             
           </Route>
         </Routes>
   </RecipeArr.Provider>
  );
}

export default App;
