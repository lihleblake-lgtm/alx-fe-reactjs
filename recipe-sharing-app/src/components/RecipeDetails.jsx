import { useRecipeStore } from '../store/recipeStore';
import { useParams } from 'react-router-dom';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';
const RecipeDetails = () => {
  const { id } = useParams();
  const recipeId = Number(id);
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === recipeId)
  );
  if (!recipe) return <p>Recipe not found.</p>;
  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <h3>Edit Recipe</h3>
      <EditRecipeForm recipe={recipe} />
      <DeleteRecipeButton id={recipeId} />
    </div>
  );
};
export default RecipeDetails;