import React, { Suspense } from 'react';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom'
const LazyHome = React.lazy(()=> import('./Components/'))
const LazyUsers = React.lazy(()=> import('./Components/Users'))
const LazyAbout = React.lazy(()=> import('./Components/About'))
const LazyBooks = React.lazy(()=> import('./Components/Books'))
const LazyCraeteBook = React.lazy(()=> import('./Components/CreateBook'))
const LazyBookDetails = React.lazy(()=> import('./Components/BookDetails'))
const LazyDetailsByName = React.lazy(()=> import('./Components/BookDetailsByName'))
const LazyErrorPage = React.lazy(()=> import('./Components/ErrorPage'))
// import Home from './Components/Home';
// import  from './Components/Users';
// import About from './Components/About';
// import Books from './Components/Books';
// import CraeteBook from './Components/CreateBook';
// import BookDetails from './Components/BookDetails';
// import BookDetailsByName from './Components/BookDetailsByName';
// import ErrorPage from './Components/ErrorPage';

function App() {
  return (
    <div className="App">
      {/* http://localhost:3000/About */}
      {/* <p style={{ border: "1px solid red" }}>
        <a href='/'>Home</a><br/>
        <a href='/Users'>Users</a><br/>
        <a href='/About'>About</a><br/>
      </p> */}
      <p style={{ border: "1px solid red" }}>
        <Link to={'/'}>Home</Link><br />
        <Link to={'/Users'}>Users</Link><br />
        <Link to={'/About'}>About</Link><br />
        <Link to={'/Books'}>Books</Link><br />
      </p>
      <Routes>
        <Route path='/' element={<Suspense fallback={"loading..."}><LazyHome /></Suspense> } />
        <Route path='*' element={<Suspense fallback={"loading..."}><LazyErrorPage /></Suspense>} />
        <Route path='/Users' element={<Suspense fallback={"loading..."}><LazyUsers /></Suspense>} />
        <Route path='/About' element={<Suspense fallback={"loading..."}><LazyAbout /></Suspense>} />
        <Route path='/Books' element={<Suspense fallback={"loading..."}><LazyBooks /></Suspense>}>
          <Route path='createBook' element={<Suspense fallback={"loading..."}><LazyCraeteBook /></Suspense>} />
          <Route path=':Id' element={<Suspense fallback={"loading..."}><LazyBookDetails /></Suspense>} />
          <Route path=':Id/:name' element={<Suspense fallback={"loading..."}><LazyDetailsByName /></Suspense>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
