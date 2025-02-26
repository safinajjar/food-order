import { use } from "react";
import { currencyFormatter } from "../../utils/formatting";
import { BASE_URL } from "../main";
import Button from "./UI/Button";
import { CartContext } from "../store/CartContext";

export default function MealItem({ meal }) {
  const cartContext = use(CartContext);

  const handleAddMealToCart = () => {
    cartContext.addItem(meal);
  };

  return (
    <li className="meal-item">
      <article>
        <img src={`${BASE_URL}/${meal.image}`} alt={meal.name} />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">
            {currencyFormatter.format(meal.price)}
          </p>
          <p className="meal-item-description">{meal.description}</p>
        </div>
        <p className="meal-item-actions">
          <Button type="button" onClick={handleAddMealToCart}>
            Add to Cart
          </Button>
        </p>
      </article>
    </li>
  );
}
