import { useContext } from 'react';
import { context } from './Provider';
import '../css/RecipeList.css'

import RecipeCard from './RecipeCard'


function RecipeList() {

    const { currentPage, setCurrentPage } = context();
    const { recipeJSONList, setRecipeJSONList } = context();

    let cards = [];

    if(recipeJSONList) {
        for(let i = 0; i < recipeJSONList.length; i++) {
            cards.push(
                <RecipeCard key={i} JSON={recipeJSONList[i]}/>
            );
        }
    } else {
        <RecipeCard key={12345}/>
    }

    return (
        <>
            {/* <h1>Test: {recipeJSONList[0]}</h1> */}
            <div id="recipe-list" className={currentPage == "list" ? "active" : ""}>
            {cards}
            </div>
        </> 
    )
}

export default RecipeList