import woodTexture from "/RecipeBoard/WoodTexture.png"
import tack from "/Menu/Tack.svg"
import savedTack from "/Menu/Saved.svg"
import backArrow from "/RecipeBoard/BackArrow.svg"
import top from "/RecipeBoard/Top.svg"
import middleTile from "/RecipeBoard/MiddleTile.svg"
import bottom from "/RecipeBoard/Bottom.svg"

import loadingImage from "/ImageLoading.svg"


function Preloader() {
    return (
        <>
            <img src={woodTexture} aria-hidden="true" className="hidden-preload"/>
            <img src={tack} aria-hidden="true" className="hidden-preload"/>
            <img src={savedTack} aria-hidden="true" className="hidden-preload"/>
            <img src={backArrow} aria-hidden="true" className="hidden-preload"/>
            <img src={top} aria-hidden="true" className="hidden-preload"/>
            <img src={middleTile} aria-hidden="true" className="hidden-preload"/>
            <img src={bottom} aria-hidden="true" className="hidden-preload"/>

            <img src={loadingImage} aria-hidden="true" className="hidden-preload"/>

        </>
    )
}

export default Preloader
