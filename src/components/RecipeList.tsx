import '../css/RecipeList.css'

import RecipeCard from './RecipeCard'


function RecipeList() {

    let cards = [];

    for(let i = 0; i < 25; i++) {
        cards.push(
            <RecipeCard key={i} />
        );
    }

    return (
        <div id="recipe-list">
        {cards}
        </div>
    )
}

export default RecipeList