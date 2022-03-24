import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import './Meals.css';

const Meals = () => {
    const [meals, setMeals] = useState([])

    // load american, Indian, seafood and Canadian foods in maelDb
    useEffect(() => {
        // fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=American')
        // fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian')
        // fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian')
        fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
        .then(res => res.json())
        .then(data => setMeals(data.meals))
    }, [])
    return (
        <div className='meals-container'>
            {
                meals?.map(meal => <Meal meal = {meal}></Meal>)
            }
        </div>
    );
};

export default Meals;