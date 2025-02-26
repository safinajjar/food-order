import { BASE_URL } from "../main";
import MealItem from "./MealItem";
import { useQuery } from "@tanstack/react-query";

export default function Meals() {
  const {
    isLoading,
    error,
    data: meals,
  } = useQuery({
    queryKey: ["meals"],
    queryFn: () => fetch(`${BASE_URL}/meals`).then((res) => res.json()),
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <ul id="meals">
      {meals?.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
