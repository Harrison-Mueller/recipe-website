import '../css/RecipeCard.css'
import { addRecent } from '../services/api';

export interface Meal {
    idMeal: string;
    strMeal: string;
    strMealThumb?: string;

}

interface Props {
    JSON?: Meal
}

function RecipeCard({JSON}: Props) {
    if(!JSON ||! JSON.strMeal) {
        JSON = {
            idMeal: "0", 
            strMeal: "Loading...", 
            strMealThumb: "ImageLoading.svg"
        };
    }
    if(!JSON.strMealThumb) {
        JSON.strMealThumb = "ImageLoading.svg";
    }

    const handleClick = () => {
        console.log("Clicked on " + JSON.strMeal);
        addRecent(JSON as Meal);
    }

    return (
        <div className="recipe-card" onClick={handleClick}>
            <img className="recipe-card-image" src={JSON.strMealThumb} alt={JSON.strMeal}></img>
            <h3 className="recipe-card-name">{JSON.strMeal}</h3>
        </div>
    )
}

export default RecipeCard