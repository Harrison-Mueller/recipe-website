import '../css/RecipeCard.css'

export interface Meal {
    strMeal: string;
    strMealThumb?: string;
}

interface Props {
    JSON?: Meal
}

function RecipeCard({JSON}: Props) {
    if(!JSON ||! JSON.strMeal) {
        JSON = {strMeal: "Loading...", strMealThumb: "ImageLoading.svg"};
    }

    return (
        <div className="recipe-card">
            <img className="recipe-card-image" src={JSON.strMealThumb} alt={JSON.strMeal}></img>
            <h3 className="recipe-card-name">{JSON.strMeal}</h3>
        </div>
    )
}

export default RecipeCard