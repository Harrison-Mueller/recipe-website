import { useEffect, useRef, useState, useContext , createContext} from 'react';
import '../css/RecipeBoard.css'
import { context } from './Provider';
import type { Meal } from "./RecipeCard";
import { addFavorite, removeFavorite, addRecent, checkFavorite } from '../services/api';
import woodTexture from "/RecipeBoard/WoodTexture.png"


interface Props {
    boardRecipeJSON: string;
}

function RecipeBoard() {
    const { currentPage, setCurrentPage } = context();
    const { recipeBoardJSON, setRecipeBoardJSON } = context();
    const { boardScroll, setBoardScroll } = context();
    let JSON = recipeBoardJSON;
    const [ ingTileNumber, setIngTileNumber ] = useState(1);
    const [ instTileNumber, setInstTileNumber ] = useState(1);
    const [ saved, setSaved ] = useState(false);


    const instRef = useRef<HTMLDivElement>(null);
    const ingRef = useRef<HTMLDivElement>(null);


    useEffect(() => {
        window.addEventListener('resize', updateTiles);
    }, []);

    useEffect(() => {
        updateTiles();
        setSaved(checkFavorite(recipeBoardJSON as Meal));
    }, [recipeBoardJSON]);

    const updateTiles = () => {
        setInstTileNumber(getInstTileNumber());
        setIngTileNumber(getIngTileNumber());
        console.log("Hello");
    }

    const getInstTileNumber = () => {
        if(! instRef.current) return 1;
        const pixelHeight = window.getComputedStyle(instRef.current).lineHeight
        return Math.ceil(instRef.current.scrollHeight / parseFloat(pixelHeight) / 4);
    }

    const getIngTileNumber = () => {
        if(! ingRef.current) return 1;
        const pixelHeight = window.getComputedStyle(ingRef.current).lineHeight
        return Math.ceil(ingRef.current.scrollHeight / parseFloat(pixelHeight) / 4);
    }

    const divRef = useRef<HTMLDivElement>(null);
    const handleScroll = () => {
        setBoardScroll(divRef.current ? divRef.current.scrollTop / divRef.current.scrollHeight : 0);
    };

    const addToFavorite = () => {
        console.log("Clicked on " + recipeBoardJSON?.strMeal);
        addFavorite(recipeBoardJSON as Meal);
        setSaved(true);
    }

    const removeFromFavorite = () => {
        removeFavorite(recipeBoardJSON as Meal);
        setSaved(false);
    }

    const exitBoard = () => {
        setCurrentPage("list");
    }

    return (
        <div ref={divRef} onScroll={handleScroll} className={"recipe-board-area " + (currentPage == "board" ? "active" : "")}>
            <div className="recipe-board-gradient"></div>
            <div className="recipe-board" style={{backgroundImage: `url(${woodTexture})`}}>
                {/* <div className="recipe-picture"></div> */}
                <div className="recipe-picture">
                    <img src={JSON?.strMealThumb}></img>
                    {
                        saved?
                        <button className="board-saved-button" onClick={removeFromFavorite}>
                            <img src="/Menu/Saved.svg"/> 
                        </button>:
                        <button className="board-save-button" onClick={addToFavorite} >
                        <img src="/Menu/Tack.svg"/> 
                    </button>
                    }
                </div>
                <button id="board-back-button" onClick={currentPage == "board" ? exitBoard : undefined}>Back</button>
                <div className="ingredients-header-area">
                    <h2 className="ingredients-header">{JSON?.strMeal}</h2>
                    <img src="/RecipeBoard/Top.svg" className="ingredients-header-background"/>
                </div>
                <div className="ingredients-area">
                    <div ref={ingRef} className="ingredients-text">
                        <ul  className="ingredients-list">
                            {JSON?.strIngredient1 && <li><span className="ingredient">{JSON.strIngredient1}&nbsp;</span><span className="measure">&nbsp;{JSON.strMeasure1}</span> <img className="ingredient-image" src={"https://www.themealdb.com/images/ingredients/" + JSON.strIngredient1 + ".png"} alt={JSON.strIngredient1} /></li>}
                            {JSON?.strIngredient2 && <li><span className="ingredient">{JSON.strIngredient2}&nbsp;</span><span className="measure">&nbsp;{JSON.strMeasure2}</span> <img className="ingredient-image" src={"https://www.themealdb.com/images/ingredients/" + JSON.strIngredient2 + ".png"} alt={JSON.strIngredient2} /></li>}
                            {JSON?.strIngredient3 && <li><span className="ingredient">{JSON.strIngredient3}&nbsp;</span><span className="measure">&nbsp;{JSON.strMeasure3}</span> <img className="ingredient-image" src={"https://www.themealdb.com/images/ingredients/" + JSON.strIngredient3 + ".png"} alt={JSON.strIngredient3} /></li>}
                            {JSON?.strIngredient4 && <li><span className="ingredient">{JSON.strIngredient4}&nbsp;</span><span className="measure">&nbsp;{JSON.strMeasure4}</span> <img className="ingredient-image" src={"https://www.themealdb.com/images/ingredients/" + JSON.strIngredient4 + ".png"} alt={JSON.strIngredient4} /></li>}
                            {JSON?.strIngredient5 && <li><span className="ingredient">{JSON.strIngredient5}&nbsp;</span><span className="measure">&nbsp;{JSON.strMeasure5}</span> <img className="ingredient-image" src={"https://www.themealdb.com/images/ingredients/" + JSON.strIngredient5 + ".png"} alt={JSON.strIngredient5} /></li>}
                            {JSON?.strIngredient6 && <li><span className="ingredient">{JSON.strIngredient6}&nbsp;</span><span className="measure">&nbsp;{JSON.strMeasure6}</span> <img className="ingredient-image" src={"https://www.themealdb.com/images/ingredients/" + JSON.strIngredient6 + ".png"} alt={JSON.strIngredient6} /></li>}
                            {JSON?.strIngredient7 && <li><span className="ingredient">{JSON.strIngredient7}&nbsp;</span><span className="measure">&nbsp;{JSON.strMeasure7}</span> <img className="ingredient-image" src={"https://www.themealdb.com/images/ingredients/" + JSON.strIngredient7 + ".png"} alt={JSON.strIngredient7} /></li>}
                            {JSON?.strIngredient8 && <li><span className="ingredient">{JSON.strIngredient8}&nbsp;</span><span className="measure">&nbsp;{JSON.strMeasure8}</span> <img className="ingredient-image" src={"https://www.themealdb.com/images/ingredients/" + JSON.strIngredient8 + ".png"} alt={JSON.strIngredient8} /></li>}
                            {JSON?.strIngredient9 && <li><span className="ingredient">{JSON.strIngredient9}&nbsp;</span><span className="measure">&nbsp;{JSON.strMeasure9}</span> <img className="ingredient-image" src={"https://www.themealdb.com/images/ingredients/" + JSON.strIngredient9 + ".png"} alt={JSON.strIngredient9} /></li>}
                            {JSON?.strIngredient10 && <li><span className="ingredient">{JSON.strIngredient10}&nbsp;</span><span className="measure">&nbsp;{JSON.strMeasure10}</span> <img className="ingredient-image" src={"https://www.themealdb.com/images/ingredients/" + JSON.strIngredient10 + ".png"} alt={JSON.strIngredient10} /></li>}
                            {JSON?.strIngredient11 && <li><span className="ingredient">{JSON.strIngredient11}&nbsp;</span><span className="measure">&nbsp;{JSON.strMeasure11}</span> <img className="ingredient-image" src={"https://www.themealdb.com/images/ingredients/" + JSON.strIngredient11 + ".png"} alt={JSON.strIngredient11} /></li>}
                            {JSON?.strIngredient12 && <li><span className="ingredient">{JSON.strIngredient12}&nbsp;</span><span className="measure">&nbsp;{JSON.strMeasure12}</span> <img className="ingredient-image" src={"https://www.themealdb.com/images/ingredients/" + JSON.strIngredient12 + ".png"} alt={JSON.strIngredient12} /></li>}
                            {JSON?.strIngredient13 && <li><span className="ingredient">{JSON.strIngredient13}&nbsp;</span><span className="measure">&nbsp;{JSON.strMeasure13}</span> <img className="ingredient-image" src={"https://www.themealdb.com/images/ingredients/" + JSON.strIngredient13 + ".png"} alt={JSON.strIngredient13} /></li>}
                            {JSON?.strIngredient14 && <li><span className="ingredient">{JSON.strIngredient14}&nbsp;</span><span className="measure">&nbsp;{JSON.strMeasure14}</span> <img className="ingredient-image" src={"https://www.themealdb.com/images/ingredients/" + JSON.strIngredient14 + ".png"} alt={JSON.strIngredient14} /></li>}
                            {JSON?.strIngredient15 && <li><span className="ingredient">{JSON.strIngredient15}&nbsp;</span><span className="measure">&nbsp;{JSON.strMeasure15}</span> <img className="ingredient-image" src={"https://www.themealdb.com/images/ingredients/" + JSON.strIngredient15 + ".png"} alt={JSON.strIngredient15} /></li>}
                            {JSON?.strIngredient16 && <li><span className="ingredient">{JSON.strIngredient16}&nbsp;</span><span className="measure">&nbsp;{JSON.strMeasure16}</span> <img className="ingredient-image" src={"https://www.themealdb.com/images/ingredients/" + JSON.strIngredient16 + ".png"} alt={JSON.strIngredient16} /></li>}
                            {JSON?.strIngredient17 && <li><span className="ingredient">{JSON.strIngredient17}&nbsp;</span><span className="measure">&nbsp;{JSON.strMeasure17}</span> <img className="ingredient-image" src={"https://www.themealdb.com/images/ingredients/" + JSON.strIngredient17 + ".png"} alt={JSON.strIngredient17} /></li>}
                            {JSON?.strIngredient18 && <li><span className="ingredient">{JSON.strIngredient18}&nbsp;</span><span className="measure">&nbsp;{JSON.strMeasure18}</span> <img className="ingredient-image" src={"https://www.themealdb.com/images/ingredients/" + JSON.strIngredient18 + ".png"} alt={JSON.strIngredient18} /></li>}
                            {JSON?.strIngredient19 && <li><span className="ingredient">{JSON.strIngredient19}&nbsp;</span><span className="measure">&nbsp;{JSON.strMeasure19}</span> <img className="ingredient-image" src={"https://www.themealdb.com/images/ingredients/" + JSON.strIngredient19 + ".png"} alt={JSON.strIngredient19} /></li>}
                            {JSON?.strIngredient20 && <li><span className="ingredient">{JSON.strIngredient20}&nbsp;</span><span className="measure">&nbsp;{JSON.strMeasure20}</span> <img className="ingredient-image" src={"https://www.themealdb.com/images/ingredients/" + JSON.strIngredient20 + ".png"} alt={JSON.strIngredient20} /></li>}
                        </ul>
                    </div>
                    <div className="ingredients-background">
                        {Array.from({ length: ingTileNumber }, (_, i) => (
                            <img src="/RecipeBoard/MiddleTile.svg"/>
                        ))}
                        <img src="/RecipeBoard/Bottom.svg" className="ingredients-footer-background"/>
                    </div>
                </div>

                <div className="instructions-header-area">
                    <h2 className="instructions-header">Instructions:</h2>
                    <img src="/RecipeBoard/Top.svg" className="instructions-header-background"/>
                </div>
                <div className="instructions-area">
                    <p ref={instRef} className="instructions-text" style={{ whiteSpace: "pre-line" }}>{JSON?.strInstructions}</p>
                    
                    <div className="instructions-background">
                        {Array.from({ length: instTileNumber/*Change to num and update on ResizeObserver*/ }, (_, i) => (
                            <img src="/RecipeBoard/MiddleTile.svg"/>
                        ))}
                        <img src="/RecipeBoard/Bottom.svg" className="instructions-footer-background"/>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default RecipeBoard