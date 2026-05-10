import '../css/RecipeCard.css'
import { addFavorite, addRecent } from '../services/api';
import { context } from './Provider';

export interface Meal {
    idMeal: string;
    strMeal: string;
    strMealThumb?: string;
    strInstructions?: string;

    //This is dumb, but blame the API, not me.
    strIngredient1?: string;
    strIngredient2?: string;
    strIngredient3?: string;
    strIngredient4?: string;
    strIngredient5?: string;
    strIngredient6?: string;
    strIngredient7?: string;
    strIngredient8?: string;
    strIngredient9?: string;    
    strIngredient10?: string;
    strIngredient11?: string;
    strIngredient12?: string;
    strIngredient13?: string;
    strIngredient14?: string;
    strIngredient15?: string;
    strIngredient16?: string;
    strIngredient17?: string;
    strIngredient18?: string;
    strIngredient19?: string;
    strIngredient20?: string;

    strMeasure1?: string;
    strMeasure2?: string;
    strMeasure3?: string;
    strMeasure4?: string;
    strMeasure5?: string;
    strMeasure6?: string;
    strMeasure7?: string;
    strMeasure8?: string;
    strMeasure9?: string;
    strMeasure10?: string;
    strMeasure11?: string;
    strMeasure12?: string;
    strMeasure13?: string;
    strMeasure14?: string;
    strMeasure15?: string;
    strMeasure16?: string;
    strMeasure17?: string;
    strMeasure18?: string;
    strMeasure19?: string;
    strMeasure20?: string;
}

interface Props {
    JSON?: Meal
}

function RecipeCard({JSON}: Props) {
    const { recipeBoardJSON, setRecipeBoardJSON } = context();
    const { currentPage, setCurrentPage } = context();
    
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

    const openRecipe = () => {
        console.log("Clicked on " + JSON.strMeal);
        setRecipeBoardJSON(JSON as Meal);
        setCurrentPage("board");
        addRecent(JSON as Meal);
    }

    const addToRecent = () => {
        console.log("Clicked on " + JSON.strMeal);
        setRecipeBoardJSON(JSON as Meal);
        addRecent(JSON as Meal);
    }

    const addToFavorite = () => {
        console.log("Clicked on " + JSON.strMeal);
        addFavorite(JSON as Meal);
    }

    return (
        <div className="recipe-card" onClick={currentPage == "list" ? openRecipe : undefined}>
            <img className="recipe-card-image" src={JSON.strMealThumb} alt={JSON.strMeal}></img>
            <h3 className="recipe-card-name">{JSON.strMeal}</h3>
        </div>
    )
}

export default RecipeCard