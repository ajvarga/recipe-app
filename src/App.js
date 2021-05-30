import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import './App.css';

function App() {
  // API ID & Key from Edamam.com for Recipe Search 
  const APP_ID = 'ec098aa3'
  const APP_KEY = '5fa3149c3e986b56d1048c3750e88bcb'

//recipes[] contains the JSON data returned from API
// search[] contains the search Query, but is updated every keystroke
// query[] contains the search query but is only updated upon button click, is used in useEffect 

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  // every time the search button is clicked, the page will get Recipes and re-render
  useEffect( () =>{
    getRecipes()
  }, [query]);

  const getRecipes = async() => {
    const res = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await res.json();

    setRecipes(data.hits);
    console.log(data.hits)
  }
// called onChange
  const updateSearch = e => {
    setSearch(e.target.value)
  }
// called onSubmit
  const getSearch = e =>{
    e.preventDefault();
    setQuery(search)
    setSearch('')
  }
  
  return (
    <div className="App">
      <form onSubmit={getSearch} className='search-form'>
        <input className='search-bar' type='text' value={search} onChange={updateSearch}></input>
        <button className='search-button' type='submit'>SEARCH</button>
      </form>
      <div className='card-grid'>
          {recipes.map(recipe =>(
            <Recipe 
              title={recipe.recipe.label} 
              region={recipe.recipe.cuisineType} 
              calories={recipe.recipe.calories} 
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients} //array
              healthLabels={recipe.recipe.healthLabels}
              totalDaily={recipe.recipe.totalDaily}
              totalNutrients={recipe.recipe.totalNutrients}
              servingSize={recipe.recipe.yield}
              />
          ))}
      </div>
    </div>
  );
}

export default App;
