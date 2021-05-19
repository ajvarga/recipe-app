import React, { useState } from 'react';
import './recipe.css'

/* props
    title: string, recipe's title
    ingredients: an array of items
    calories: string, amount of calories in a dish
    image: image url for food image
*/

const Recipe = (props) => {
    const [flip, setFlip] = useState(false)
    return ( 
    <div className='card-grid'>
        <div className={`card ${flip ? 'flip' : ''}`} onClick={() => setFlip(!flip)}>
            <div>
                <div className='front'>
                    <div className='image-box'>
                        <img src={props.image} alt=''/>
                    </div>
                    <h2>{props.title}</h2>
                </div>
                <div className='back'>
                    {/* <ul>
                        {props.ingredients.map(ingredient => (
                            <li>{ingredient.text}</li>
                        ))}
                    </ul> */}
                    <p>calories:  {props.calories}</p>
                </div>
            </div>
        </div>
    </div>
    );
}
 
export default Recipe;