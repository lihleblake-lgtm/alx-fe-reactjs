import { Link } from "react-router-dom";
function RecipeList({ recipes }) {
  return (
    <div>
      <h2>Recipes</h2>
      {recipes.length === 0 ? (
        <p>No recipes yet. Add your first one!</p>
      ) : (
        <ul>
          {recipes.map((recipe, index) => (
            <li key={index}>
              <Link to={`/recipe/${index}`}>
                {recipe.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
      <Link to="/add">Add New Recipe</Link>
    </div>
  );
}
export default RecipeList;
