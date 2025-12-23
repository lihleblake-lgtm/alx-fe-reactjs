import { useState } from "react";
function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
  }
  const handleSubmit = (e) => {
    e.preventDefault();
  }
    if (!title || !ingredients || !steps) {
      setError("All fields are required.");
      return;
    }
    const ingredientsList = ingredients.split(",").map(item => item.trim());
    if (ingredientsList.length < 2) {
      setError("Please include at least two ingredients.");
      return;
    }
    setError("");
    // For now, just log the recipe (backend comes later)
    const newRecipe = {
      title,
      ingredients: ingredientsList,
      steps,
    };
    console.log("New Recipe Submitted:", newRecipe);
    // Clear form
    setTitle("");
    setIngredients("");
    setSteps("");
  };
  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Add New Recipe 🍲
      </h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md space-y-4"
      >
        {/* Error Message */}
        {error && (
          <p className="text-red-500 text-sm">
            {error}
          </p>
        )}
        {/* Title */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Recipe Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="
              w-full
              border
              border-gray-300
              rounded-md
              p-2
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
            "
            placeholder="Enter recipe title"
          />
        </div>
        {/* Ingredients */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Ingredients (comma separated)
          </label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="
              w-full
              border
              border-gray-300
              rounded-md
              p-2
              h-24
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
            "
            placeholder="e.g. eggs, flour, milk"
          ></textarea>
        </div>
        {/* Steps */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Preparation Steps
          </label>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="
              w-full
              border
              border-gray-300
              rounded-md
              p-2
              h-28
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
            "
            placeholder="Describe how to prepare the recipe"
          ></textarea>
        </div>
        {/* Submit Button */}
        <button
          type="submit"
          className="
            w-full
            bg-blue-600
            text-white
            py-2
            rounded-md
            hover:bg-blue-700
            transition
            duration-300
          "
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}
export default AddRecipeForm;
