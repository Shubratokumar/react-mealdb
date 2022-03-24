import React from 'react';
import './Meal.css'

const Meal = (props) => {
    const {strMeal, idMeal, strMealThumb} = props.meal;
    return (
        <div className='meal-container'>
                <img src= {strMealThumb} alt="" />
            <div className='meal-description'>
                <h3>Menu name : {strMeal}</h3>
                <h5>Menu ID : {idMeal}</h5>
            </div>
        </div>
    );
};

export default Meal;