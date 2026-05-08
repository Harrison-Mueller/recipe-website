import '../css/RecipeCard.css'
import { addFavorite, addRecent } from '../services/api';

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

    const addToRecent = () => {
        console.log("Clicked on " + JSON.strMeal);
        addRecent(JSON as Meal);
    }

    const addToFavorite = () => {
        console.log("Clicked on " + JSON.strMeal);
        addFavorite(JSON as Meal);
    }

    return (
        <div className="recipe-card" >
            <img className="recipe-card-image" src={JSON.strMealThumb} alt={JSON.strMeal} onClick={addToRecent}></img>
            <h3 className="recipe-card-name" onClick={addToFavorite}>{JSON.strMeal}</h3>
        </div>
    )
}

export default RecipeCard