import { useRef } from 'react';
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
                <button id="board-back-button" onClick={currentPage == "board" ? exitBoard : undefined}>Back</button>
                <h2>{JSON?.strMeal}</h2>
                <ul>
                    {JSON?.strIngredient1 && <li>{JSON.strIngredient1} - {JSON.strMeasure1}</li>}
                    {JSON?.strIngredient2 && <li>{JSON.strIngredient2} - {JSON.strMeasure2}</li>}
                    {JSON?.strIngredient3 && <li>{JSON.strIngredient3} - {JSON.strMeasure3}</li>}
                    {JSON?.strIngredient4 && <li>{JSON.strIngredient4} - {JSON.strMeasure4}</li>}
                    {JSON?.strIngredient5 && <li>{JSON.strIngredient5} - {JSON.strMeasure5}</li>}
                    {JSON?.strIngredient6 && <li>{JSON.strIngredient6} - {JSON.strMeasure6}</li>}
                    {JSON?.strIngredient7 && <li>{JSON.strIngredient7} - {JSON.strMeasure7}</li>}
                    {JSON?.strIngredient8 && <li>{JSON.strIngredient8} - {JSON.strMeasure8}</li>}
                    {JSON?.strIngredient9 && <li>{JSON.strIngredient9} - {JSON.strMeasure9}</li>}
                    {JSON?.strIngredient10 && <li>{JSON.strIngredient10} - {JSON.strMeasure10}</li>}
                    {JSON?.strIngredient11 && <li>{JSON.strIngredient11} - {JSON.strMeasure11}</li>}
                    {JSON?.strIngredient12 && <li>{JSON.strIngredient12} - {JSON.strMeasure12}</li>}
                    {JSON?.strIngredient13 && <li>{JSON.strIngredient13} - {JSON.strMeasure13}</li>}
                    {JSON?.strIngredient14 && <li>{JSON.strIngredient14} - {JSON.strMeasure14}</li>}
                    {JSON?.strIngredient15 && <li>{JSON.strIngredient15} - {JSON.strMeasure15}</li>}
                    {JSON?.strIngredient16 && <li>{JSON.strIngredient16} - {JSON.strMeasure16}</li>}
                    {JSON?.strIngredient17 && <li>{JSON.strIngredient17} - {JSON.strMeasure17}</li>}
                    {JSON?.strIngredient18 && <li>{JSON.strIngredient18} - {JSON.strMeasure18}</li>}
                    {JSON?.strIngredient19 && <li>{JSON.strIngredient19} - {JSON.strMeasure19}</li>}
                    {JSON?.strIngredient20 && <li>{JSON.strIngredient20} - {JSON.strMeasure20}</li>}
                </ul>

                <h2>Instructions:</h2>
                <p>{JSON?.strInstructions}</p>
            </div>
        </div>
    )
}

export default RecipeBoard