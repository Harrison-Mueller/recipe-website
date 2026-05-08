import '../css/Menu.css'
import { context } from './Provider';
import { getFavorites, getRecents, getRandom, searchRecipes } from '../services/api';
import { useState } from 'react';


function Menu() {
    const [searchTerm, setSearchTerm] = useState('');
    const { recipeJSONList, setRecipeJSONList } = context();

    const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (searchTerm.trim()) {
            searchRecipes(setRecipeJSONList, searchTerm);
        }
    }

    return ( 
        <div id="menu">
            <form onSubmit={handleSearchSubmit}>
                <input type="search" 
                    id="search-bar" 
                    placeholder="Search 🔍" 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} >
                </input>
            </form>
            <button className="menu-button" id="favorites-menu-button" onClick={() => getFavorites(setRecipeJSONList)}>favorites</button>
            <button className="menu-button" id="recents-menu-button" onClick={() => getRecents(setRecipeJSONList)}>recents</button>
            <button className="menu-button" id="refresh-menu-button" onClick={() => getRandom(setRecipeJSONList)}>refresh</button>
        </div>
    )
}

export default Menu