import type { Meal } from "../components/RecipeCard";

const API_KEY = "1";
const API_URL = "https://www.themealdb.com/api/json/v1/" + API_KEY + "/";

const delay = (ms: number): Promise<void> => {//simulates delay TEMP
    return new Promise(resolve => setTimeout(resolve, ms));
};

export const getRandom = async (setRecipeList: (recipeJSONList: Meal[]) => void) => {
    setRecipeList(Array.from({ length: 25 }, () => ({} as Meal)));
    // await delay(4000);
    let recipeList: Meal[] = [];
    for(let i = 0; i < 25; i++) {
        await fetch(API_URL + "random.php", {method: "POST"})
            .then(function(response) { return response.json(); })
            .then(function(json) {
              // use the json
            //   console.log(json);
            //   console.log(json.meals[0]);
            //   console.log(json.meals[0].strIngredient2);
                // recipeList = json.meals;
                recipeList.push(json.meals[0]);
            });
        }
        setRecipeList(recipeList);
    
    // setRecipeList(["APIRandom", "1", "2", "3"]);
};

export const getFavorites = async (setRecipeList: (recipeJSONList: Meal[]) => void) => {
    setRecipeList([{strMeal: "APIFavorites"}]);
};

export const getRecents = async (setRecipeList: (recipeJSONList: Meal[]) => void) => {
    setRecipeList([{strMeal: "APIRecents"}]);
};

export const searchRecipes = async (setRecipeList: (recipeJSONList: Meal[]) => void) => {
    setRecipeList([{strMeal: "APISearch"}]);
};