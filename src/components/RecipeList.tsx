import '../css/RecipeList.css'

import RecipeCard from './RecipeCard'

interface Props {
    recipeJSONList?: string[]
}

function RecipeList({recipeJSONList}: Props) {

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
        <div id="recipe-list">
        {cards}
        </div>
    )
}

export default RecipeList