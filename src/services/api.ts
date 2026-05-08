import type { Meal } from "../components/RecipeCard";

const API_KEY = "1";
const API_URL = "https://www.themealdb.com/api/json/v1/" + API_KEY + "/";

const delay = (ms: number): Promise<void> => {//simulates delay TEMP
    return new Promise(resolve => setTimeout(resolve, ms));
};

export const getRandom = async (setRecipeList: (recipeJSONList: Meal[]) => void) => {
    setRecipeList(Array.from({ length: 25 }, () => ({} as Meal)));
    let recipeList: Meal[] = new Array(25);
    for(let i = 0; i < 25; i++) {
        await fetch(API_URL + "random.php", {method: "POST"})
            .then(function(response) { return response.json(); })
            .then(function(json) {
            recipeList[i] = json.meals[0];
        });
    }
    setRecipeList(recipeList);
    
    // setRecipeList(["APIRandom", "1", "2", "3"]);
};

export const getFavorites = async (setRecipeList: (recipeJSONList: Meal[]) => void) => {
    let jsonFavorites: string|null = localStorage.getItem("favoriteRecipes");
    if(jsonFavorites === null) {
        setRecipeList([{idMeal: "0", strMeal: "No Favorite Recipes"}]);
        return;
    }
    let favorites = JSON.parse(jsonFavorites);
    
    setRecipeList(Array.from({ length: favorites.length }, () => ({} as Meal)));
    let recipeList: Meal[] = new Array(favorites.length);
    for(let i = 0; i < favorites.length; i++) {
        await fetch(API_URL + "lookup.php?i=" + favorites[i], {method: "POST"})
            .then(function(response) { return response.json(); })
            .then(function(json) {
            recipeList[favorites.length - 1 - i] = json.meals[0];
        });
    }
    setRecipeList(recipeList);
};

export const getRecents = async (setRecipeList: (recipeJSONList: Meal[]) => void) => {
    let jsonRecents: string|null = localStorage.getItem("recentRecipes");
    if(jsonRecents === null) {
        setRecipeList([{idMeal: "0", strMeal: "No Recent Recipes"}]);
        return;
    }
    let recents = JSON.parse(jsonRecents);
    
    setRecipeList(Array.from({ length: recents.length }, () => ({} as Meal)));
    let recipeList: Meal[] = new Array(recents.length);
    for(let i = 0; i < recents.length; i++) {
        await fetch(API_URL + "lookup.php?i=" + recents[i], {method: "POST"})
            .then(function(response) { return response.json(); })
            .then(function(json) {
            recipeList[recents.length - 1 - i] = json.meals[0];
        });
    }
    setRecipeList(recipeList);
};

export const searchRecipes = async (setRecipeList: (recipeJSONList: Meal[]) => void) => {
    // setRecipeList([{strMeal: "APISearch"}]);
};


export function addRecent(meal: Meal) {
    if(meal.idMeal === "0" || meal.idMeal == null) {
        return;
    }
    
    let jsonRecents: string|null = localStorage.getItem("recentRecipes");
    let recents: string[] = [];
    if(jsonRecents != null) {
        recents = JSON.parse(jsonRecents);
    }

    if(recents.includes(meal.idMeal)) {
        recents.splice(recents.indexOf(meal.idMeal), 1);
        recents.push(meal.idMeal);
    } else {
        recents.push(meal.idMeal);
        //Remove down to 25. Loop is used in case 25 is somehow exceeded
        let excess = recents.length - 25;
        for(let i = 0; i < excess; i++) {
            recents.shift();
        }
    }
    localStorage.setItem("recentRecipes", JSON.stringify(recents));


    let jsonFavorites: string|null = localStorage.getItem("favoriteRecipes");
    let favorites: string[] = [];
    if(jsonFavorites === null) {
        return;
    }
    favorites = JSON.parse(jsonFavorites);

    
    if(favorites.includes(meal.idMeal)) {
        console.log("Update Fav recent")
        favorites.splice(favorites.indexOf(meal.idMeal), 1);
        favorites.push(meal.idMeal);
        localStorage.setItem("favoriteRecipes", JSON.stringify(favorites));
    }



}

export function addFavorite(meal: Meal) {
    if(meal.idMeal === "0" || meal.idMeal == null) {
        return;
    }
    
    let jsonFavorites: string|null = localStorage.getItem("favoriteRecipes");
    let favorites: string[] = [];
    if(jsonFavorites != null) {
        favorites = JSON.parse(jsonFavorites);
    }

    if(favorites.includes(meal.idMeal)) {
        favorites.splice(favorites.indexOf(meal.idMeal), 1);
    }
    favorites.push(meal.idMeal);



    localStorage.setItem("favoriteRecipes", JSON.stringify(favorites));
}