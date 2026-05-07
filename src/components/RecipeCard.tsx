import '../css/RecipeCard.css'

export interface Meal {
    strMeal: string;
}

interface Props {
    JSON?: Meal
}

function RecipeCard({JSON}: Props) {
    if(!JSON ||! JSON.strMeal) {
        JSON = {strMeal: "Loading..."};
    }

    return (
        <div className="recipe-card">
            <img className="recipe-card-image" src="ImageLoading.svg"></img>
            <h3 className="recipe-card-name">{JSON.strMeal}</h3>
        </div>
    )
}

export default RecipeCard