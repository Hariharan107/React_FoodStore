import React, { useEffect, useState } from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://react-api-c7ada-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json"
      );
      
      // console.log(response)
      if (!response.ok) {
        throw new Error("Something went Wrong");
      }
      const data = await response.json();
      const loadedMeals = [];
      for (let key in data) {
        loadedMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }
      setIsLoading(false);
      setMeals(loadedMeals);
    };
    fetchMeals().catch((error) => {
      setIsLoading(false);
      setError(error.message);
    });
  }, []);
  
  if (isLoading) {
    return (
      <section className={classes["lds-hourglass"]}>
        <p>Loading...</p>
      </section>
    );
  }
  if (error) {
    return(
    <section className={classes.error}>      
      <p>{error}</p>
    </section>
    )
  }
  const mealsItems = meals.map((meal) => (
    <li key={meal.id}>
      <MealItem
        key={meal.id}
        id={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    </li>
  ));
  return (
    <div className={classes.meals}>
      <Card>
        <ul>{mealsItems}</ul>
      </Card>
    </div>
  );
};

export default AvailableMeals;
