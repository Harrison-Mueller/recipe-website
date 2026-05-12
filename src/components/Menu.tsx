import '../css/Menu.css'
import { context } from './Provider';
import { getFavorites, getRecents, getRandom, searchRecipes } from '../services/api';
import { useState } from 'react';


function Menu() {
    const [searchTerm, setSearchTerm] = useState('');
    const { recipeJSONList, setRecipeJSONList } = context();
    const { currentPage, setCurrentPage } = context();


    const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(currentPage != "list") {
            return;
        }
        if (searchTerm.trim()) {
            searchRecipes(setRecipeJSONList, searchTerm);
        }
    }

    const favoritesButton = () => {
        getFavorites(setRecipeJSONList);
    }

    const recentsButton = () => {
        getRecents(setRecipeJSONList);
    }

    const refreshButton = () => {
        getRandom(setRecipeJSONList);
    }

    return ( 
        <div id="menu" className={currentPage == "list" ? "active" : ""}>
            <form className="search-form" onSubmit={handleSearchSubmit}>
                <input type="search" 
                    id="search-bar" 
                    placeholder="Search 🔍" 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} >
                </input>
            </form>
            <div className="menu-buttons">
                <button className="menu-button" id="favorites-menu-button" onClick={currentPage == "list" ? favoritesButton : undefined}>favorites<img src="/Menu/Tack.svg" /></button>
                <button className="menu-button" id="recents-menu-button" onClick={currentPage == "list" ? recentsButton : undefined}><img src="/Menu/Hourglass.svg" />recents</button>
                <button className="menu-button" id="refresh-menu-button" onClick={currentPage == "list" ? refreshButton : undefined}>refresh<img src="/Menu/Refresh.svg" /></button>
            </div>
        </div>
    )
}

export default Menu