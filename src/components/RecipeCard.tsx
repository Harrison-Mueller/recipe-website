import '../css/RecipeCard.css'

interface Props {
    JSON?: string
}

function RecipeCard({JSON}: Props) {

    return (
        <div className="recipe-card">
            <img className="recipe-card-image" src="ImageLoading.svg"></img>
            <h3 className="recipe-card-name">Loading...</h3>
        </div>
    )
}

export default RecipeCard