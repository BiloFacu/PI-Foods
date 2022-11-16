import { Routes, Route} from 'react-router-dom'
import Home from './components/Home/Home';
import LandingPage from './components/Landing/Landing'
import RecipesDetails from './components/RecipesDetail/RecipesDetail';
import CreateRecipe from './components/CreateRecipes/CreateRecipes';
function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/recipes/:id' element={<RecipesDetails/>} />
      <Route path='/createRecipe' element={<CreateRecipe/>} />
    </Routes>
  );
}

export default App;
