import { useParams, Link } from "react-router-dom";
import recipesData from "../data.json";

function RecipeDetail() {
    const { id } = useParams();
    const recipe = recipesData.find(
        (item) => item.id === parseInt(id)
    );

    if (!recipe) {
        return (
            <div className="p-6 text-center">
                <p className="text-red-500">Recipe not found.</p>
                <Link to="/" className="text-blue-500 underline">
                Go back home
                </Link>
            </div>
        );
    }
}

return (
    <div className="max-w-3xl mx-auto p-6">
        <Link to="/"
        className="text-blue-500 hover:underline mb-4 inline-block"
        >
        Back to recipes   
        </Link>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-4 object-cover"
            />
            <div className="p-6">
                <h1 className="text-3xl font-bold mb-4">
                    {recipe.title}
                </h1>

                <p className="text-gray-600 mb-6">
                    {recipe.summary}
                </p>

                {/* Ingredients */}
                <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">
                        Ingredients
                    </h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                        {recipe.ingredients.map((ingredient, index) => ( 
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                </div>

                {/* Instructions */}
                <div>
                    <h2 className="text-xl font-semibold mb-2">
                        Instructions
                    </h2>
                    <ol className="list-decimal list-inside text-gray-700 space-y-2">
                        {recipe.instructions.map((step, index) => (
                            <li key={index}>{step}</li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    </div>
);

export default RecipeDetail;