import React, { useState, useEffect } from 'react';
import './recipe.css'

/* props
    title: string, recipe's title
    ingredients: an array of items
    calories: string, amount of calories in a dish
    image: image url for food image
    dietLabel: string label
    healthLabel: array of health labels
    totalDaily: list of objects conaining vitamins by percent
    totalNutrients: list of objects containing total nutrients by grams
*/

const Recipe = (props) => {
    const [flip, setFlip] = useState(false)
    const [cal, setCal] = useState(props.calories)
    const [fat, setFat] = useState(props.totalNutrients.FAT.quantity)
    // const [chol, setChol] = useState(props.totalNutrients.CHOLE.quantity)
    // const [sodium, setSodium] = useState(props.totalNutrients.NA.quantity)
    // const [carbs, setCarbs] = useState(props.totalNutrients.CHOCDF.quantity)
    // const [sugar, setSugar] = useState(props.totalNutrients.SUGAR.quantity)
    // const [protein, setProtein] = useState(props.totalNutrients.PROCNT.quantity)

    useEffect(() =>{
        convert()
    },[])
    // rounds all units to the nearest integer
    const convert = () => {
        setCal(Math.round(cal))
        setFat(Math.round(fat))
        // setChol(Math.round(chol))
        // setSodium(Math.round(sodium))
        // setCarbs(Math.round(carbs))
        // setSugar(Math.round(sugar))
        // setProtein(Math.round(protein))
    }
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
                    <h2>NUTRITION FACTS</h2>
                    {/* <ul>
                        {props.ingredients.map(ingredient => (
                            <li>{ingredient.text}</li>
                        ))}
                    </ul> */}
                    <p>calories:  {cal}</p>
                </div>
            </div>
        </div>
    </div>
    );
}
 
export default Recipe;