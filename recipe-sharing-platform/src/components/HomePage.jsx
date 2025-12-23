import { Link } from "react-router-dom";
import { useEffect, usestate } from "react";
import recipesData from "../data.json";

function HomePage() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        setRecipes(recipesData);
    }, []);

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold text-center mb-8">
                Recipe Sharing Platform
            </h1>

            <div className="
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            gap-6">

                {recipes.map(() => (
                    <div
                    key={recipes.id}
                    className="
                    bg-white
                    rounded-lg
                    shadow-md
                    overflow-hidden
                    transition
                    transform
                    hover:scale-105
                    hover:shadow-lg">

                        <img 
                        src={recipes.image}
                        alt={recipe.tittle}
                        className="w-full h-40 object-cover"
                        />

                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-2">
                                {recipe.tittle}
                            </h2>
                            <p className="text-gray-600 text-sm">
                                {recipe.summary}
                            </p>
                        </div>
                    </div>       
                ) )}
            </div>
        </div>
    );
}

export default HomePage