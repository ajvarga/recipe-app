import React from 'react';
import style from './recipe.module.css'

/* props
    title: string, recipe's title
    ingredients: an array of items
    calories: string, amount of calories in a dish
    image: image url for food image*/

const Recipe = (props) => {
    return ( 
    <div className={style.recipe}>
        <div>
            <div className='cardFace'>
                <h1>{props.title}</h1>
                <img src={props.image} alt=''/>
            </div>
            <div className='cardBack'>
                <ul>
                    {props.ingredients.map(ingredient => (
                        <li>{ingredient.text}</li>
                    ))}
                </ul>
                <p>calories:  {props.calories}</p>
                <button>Bookmark</button>
            </div>
        </div>
    </div>
    );
}
 
export default Recipe;