import { Link } from 'react-router-dom'

const AppBar=()=>{
    return(
        <>
        AppBar
        <Link to={'/'}>Homepage</Link>
        <Link to={'/RecipesList'}>Recipes List</Link>
        <Link to={'/Login'}>Login</Link>

        {/* <Button color="inherit" component={Link} to="/">בית</Button>
        <Button color="inherit" component={Link} to="/RecipeList">מתכונים</Button>
        <Button color="inherit" component={Link} to="/Login">התחברות</Button>
        <Button color="inherit" component={Link} to="/AddRecipe">הוסף מתכון</Button> */}
        </>
    )
}

export default AppBar