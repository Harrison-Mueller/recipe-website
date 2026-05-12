import { useEffect, useRef, useState } from 'react';
import '../css/RecipeBoard.css'
import { context } from './Provider';
import type { Meal } from "./RecipeCard";


interface Props {
    boardRecipeJSON: string;
}

function RecipeBoard() {
    const { currentPage, setCurrentPage } = context();
    const { recipeBoardJSON, setRecipeBoardJSON } = context();
    const { boardScroll, setBoardScroll } = context();
    let JSON = recipeBoardJSON;

    const divRef = useRef<HTMLDivElement>(null);
    const handleScroll = () => {
        setBoardScroll(divRef.current ? divRef.current.scrollTop / divRef.current.scrollHeight : 0);
    };

    const exitBoard = () => {
        setCurrentPage("list");
    }

    return (
        <div ref={divRef} onScroll={handleScroll} className={"recipe-board-area " + (currentPage == "board" ? "active" : "")}>
            <div className="recipe-board">
                <div className="recipe-picture"></div>
                <button id="board-back-button" onClick={currentPage == "board" ? exitBoard : undefined}>Back</button>
                <div className="ingredients-header-background">
                    <h2 className="ingredients-header">{JSON?.strMeal}</h2>
                </div>
                <div className="ingredients-background">
                    <ul className="ingredients-list">
                        {JSON?.strIngredient1 && <li>{JSON.strIngredient1} - {JSON.strMeasure1} <img className="ingredient-image" src={"https://www.themealdb.com/images/ingredients/" + JSON.strIngredient1 + ".png"} alt={JSON.strIngredient1} /></li>}
                        {JSON?.strIngredient2 && <li>{JSON.strIngredient2} - {JSON.strMeasure2} <img className="ingredient-image" src={"https://www.themealdb.com/images/ingredients/" + JSON.strIngredient2 + ".png"} alt={JSON.strIngredient2} /></li>}
                        {JSON?.strIngredient3 && <li>{JSON.strIngredient3} - {JSON.strMeasure3} <img className="ingredient-image" src={"https://www.themealdb.com/images/ingredients/" + JSON.strIngredient3 + ".png"} alt={JSON.strIngredient3} /></li>}
                        {JSON?.strIngredient4 && <li>{JSON.strIngredient4} - {JSON.strMeasure4} <img className="ingredient-image" src={"https://www.themealdb.com/images/ingredients/" + JSON.strIngredient4 + ".png"} alt={JSON.strIngredient4} /></li>}
                        {JSON?.strIngredient5 && <li>{JSON.strIngredient5} - {JSON.strMeasure5} <img className="ingredient-image" src={"https://www.themealdb.com/images/ingredients/" + JSON.strIngredient5 + ".png"} alt={JSON.strIngredient5} /></li>}
                        {JSON?.strIngredient6 && <li>{JSON.strIngredient6} - {JSON.strMeasure6} <img className="ingredient-image" src={"https://www.themealdb.com/images/ingredients/" + JSON.strIngredient6 + ".png"} alt={JSON.strIngredient6} /></li>}
                        {JSON?.strIngredient7 && <li>{JSON.strIngredient7} - {JSON.strMeasure7} <img className="ingredient-image" src={"https://www.themealdb.com/images/ingredients/" + JSON.strIngredient7 + ".png"} alt={JSON.strIngredient7} /></li>}
                        {JSON?.strIngredient8 && <li>{JSON.strIngredient8} - {JSON.strMeasure8} <img className="ingredient-image" src={"https://www.themealdb.com/images/ingredients/" + JSON.strIngredient8 + ".png"} alt={JSON.strIngredient8} /></li>}
                        {JSON?.strIngredient9 && <li>{JSON.strIngredient9} - {JSON.strMeasure9} <img className="ingredient-image" src={"https://www.themealdb.com/images/ingredients/" + JSON.strIngredient9 + ".png"} alt={JSON.strIngredient9} /></li>}
                        {JSON?.strIngredient10 && <li>{JSON.strIngredient10} - {JSON.strMeasure10} <img className="ingredient-image" src={"https://www.themealdb.com/images/ingredients/" + JSON.strIngredient10 + ".png"} alt={JSON.strIngredient10} /></li>}
                        {JSON?.strIngredient11 && <li>{JSON.strIngredient11} - {JSON.strMeasure11} <img className="ingredient-image" src={"https://www.themealdb.com/images/ingredients/" + JSON.strIngredient11 + ".png"} alt={JSON.strIngredient11} /></li>}
                        {JSON?.strIngredient12 && <li>{JSON.strIngredient12} - {JSON.strMeasure12} <img className="ingredient-image" src={"https://www.themealdb.com/images/ingredients/" + JSON.strIngredient12 + ".png"} alt={JSON.strIngredient12} /></li>}
                        {JSON?.strIngredient13 && <li>{JSON.strIngredient13} - {JSON.strMeasure13} <img className="ingredient-image" src={"https://www.themealdb.com/images/ingredients/" + JSON.strIngredient13 + ".png"} alt={JSON.strIngredient13} /></li>}
                        {JSON?.strIngredient14 && <li>{JSON.strIngredient14} - {JSON.strMeasure14} <img className="ingredient-image" src={"https://www.themealdb.com/images/ingredients/" + JSON.strIngredient14 + ".png"} alt={JSON.strIngredient14} /></li>}
                        {JSON?.strIngredient15 && <li>{JSON.strIngredient15} - {JSON.strMeasure15} <img className="ingredient-image" src={"https://www.themealdb.com/images/ingredients/" + JSON.strIngredient15 + ".png"} alt={JSON.strIngredient15} /></li>}
                        {JSON?.strIngredient16 && <li>{JSON.strIngredient16} - {JSON.strMeasure16} <img className="ingredient-image" src={"https://www.themealdb.com/images/ingredients/" + JSON.strIngredient16 + ".png"} alt={JSON.strIngredient16} /></li>}
                        {JSON?.strIngredient17 && <li>{JSON.strIngredient17} - {JSON.strMeasure17} <img className="ingredient-image" src={"https://www.themealdb.com/images/ingredients/" + JSON.strIngredient17 + ".png"} alt={JSON.strIngredient17} /></li>}
                        {JSON?.strIngredient18 && <li>{JSON.strIngredient18} - {JSON.strMeasure18} <img className="ingredient-image" src={"https://www.themealdb.com/images/ingredients/" + JSON.strIngredient18 + ".png"} alt={JSON.strIngredient18} /></li>}
                        {JSON?.strIngredient19 && <li>{JSON.strIngredient19} - {JSON.strMeasure19} <img className="ingredient-image" src={"https://www.themealdb.com/images/ingredients/" + JSON.strIngredient19 + ".png"} alt={JSON.strIngredient19} /></li>}
                        {JSON?.strIngredient20 && <li>{JSON.strIngredient20} - {JSON.strMeasure20} <img className="ingredient-image" src={"https://www.themealdb.com/images/ingredients/" + JSON.strIngredient20 + ".png"} alt={JSON.strIngredient20} /></li>}
                    </ul>
                </div>

                <div className="instructions-header-background">
                    <h2 className="instructions-header">Instructions:</h2>
                </div>
                <div className="instructions-background">
                    <p className="instructions-text" style={{ whiteSpace: "pre-line" }}>{JSON?.strInstructions}<br></br>&nbsp;<br></br>&nbsp;</p>
                </div>
                {/* <div className="instructions-footer-background"></div> */}
            </div>
        </div>
    )
}

export default RecipeBoard