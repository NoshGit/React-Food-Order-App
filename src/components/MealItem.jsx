import { currencyFormatter } from '../utils/formatter';

export default function MealItem({ meal }) {
  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
        <div>
          <h2>{meal.name}</h2>
          <p className="meal-item-price">
            {currencyFormatter.format(meal.price)}
          </p>
          <p className="meal-item-description">{meal.description}</p>
        </div>
        <p className="meal-item-action">
          <button>Add to Cart</button>
        </p>
      </article>
    </li>
  );
}
