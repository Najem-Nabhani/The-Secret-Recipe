import React, {useEffect, useState} from 'react';
import {Component} from 'react';
import { Badge, Nav } from 'react-bootstrap';
import {useSelector, useDispatch} from 'react-redux';
import Recipe from './Recipe';
import './App.css';

function App() {

  const APP_ID  = '13fa3133';
  const APP_KEY = 'e4d4da73a32e272a14b103aa8560e2bb';
  
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect(()=>{
    getRecipes();
  }, [query]);

  const getRecipes = async ()=>{
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  }

  const handleSearch = e => {
    console.log(e.target.value);
    setSearch(e.target.value);
  }

  const submitQuery = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className='App'>
      
      <h1 className='page-title'> The Secret Recipe </h1>

      <form className='container' onSubmit={submitQuery}>
        <div className='input-group'>
          <input value={search} className='form-control' type='search' onChange={handleSearch}/>
          <button className='input-group-append btn btn-success' 
                  type='submit'
            >Search</button>
        </div>
      </form>      
      <div>
        {
          recipes.map((r, idx)=>(
            <Recipe 
              key      = {idx}
              title    = {r.recipe.label}
              image    = {r.recipe.image}
              ingers   = {r.recipe.ingredients}
            />
          ))
        }

      </div>
    </div>
  );
}

export default App;
