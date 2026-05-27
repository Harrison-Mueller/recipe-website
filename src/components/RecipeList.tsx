import { useContext, useRef, useEffect } from 'react';
import { context } from './Provider';
import '../css/RecipeList.css'


import RecipeCard from './RecipeCard'


function RecipeList() {
    const { listScroll, setListScroll } = context();
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

    useEffect(() => {
        divRef.current? divRef.current.scrollTo({
            top: 0,
            behavior: 'smooth'   // ← makes it smooth
          }) : "";
    }, [recipeJSONList])
    

    const divRef = useRef<HTMLDivElement>(null);
    const handleScroll = () => {
        setListScroll(divRef.current ? divRef.current.scrollTop / divRef.current.scrollHeight : 0);
    };

    return (
        <>
            {/* <h1>Test: {recipeJSONList[0]}</h1> */}
            <div ref={divRef} onScroll={handleScroll} id="recipe-list" className={currentPage == "list" ? "active" : ""}>
                <div id="recipe-list-gradient"></div>
                {cards}
            </div>
        </> 
    )
}

export default RecipeList