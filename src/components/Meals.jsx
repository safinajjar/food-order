import { useEffect, useState } from "react";
import { BASE_URL } from "../main";

export default function Meals() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`${BASE_URL}/meals`);

        if (!response.ok) {
          throw new Error("Failed to fetch meals.");
        }

        const data = await response.json();
        setMeals(data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <ul id="meals">
      {meals.map((meal) => (
        <li key={meal.id} className="meal-item">
          <article>{meal.name}</article>
        </li>
      ))}
    </ul>
  );
}
