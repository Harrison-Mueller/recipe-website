import '../css/Menu.css'
import { context } from './Provider';
import { getFavorites, getRecents, getRandom } from '../services/api';


function Menu() {
    const { recipeJSONList, setRecipeJSONList } = context();

    return ( 
        <div id="menu">
            <input type="search" id="search-bar" placeholder="Search 🔍" ></input>
            <button className="menu-button" id="favorites-menu-button" onClick={() => getFavorites(setRecipeJSONList)}>favorites</button>
            <button className="menu-button" id="recents-menu-button" onClick={() => getRecents(setRecipeJSONList)}>recents</button>
            <button className="menu-button" id="refresh-menu-button" onClick={() => getRandom(setRecipeJSONList)}>refresh</button>
        </div>
    )
}

export default Menu