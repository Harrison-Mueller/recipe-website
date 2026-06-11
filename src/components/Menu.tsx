import '../css/Menu.css'
import { context } from './Provider';
import { getFavorites, getRecents, getRandom, searchRecipes } from '../services/api';
import { useEffect, useState } from 'react';
import tack from "/Menu/Tack.svg";
import hourglass from "/Menu/Hourglass.svg";
import refresh from "/Menu/Refresh.svg";
import search from "/Menu/Search.svg";


function Menu() {
    const [searchTerm, setSearchTerm] = useState('');
    const { setRecipeJSONList } = context();
    const { currentPage } = context();


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

    useEffect(() => {
        console.log("Start Load");
        getRandom(setRecipeJSONList);
    }, []);

    return ( 
        <div id="menu" className={currentPage == "list" ? "active" : ""}>
            <img src="Menu/Background.png" id="menu-background" />
            <form className="search-form" onSubmit={handleSearchSubmit}>
                <input type="search" 
                    id="search-bar" 
                    // maxLength={6}
                    placeholder="Search" 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} >
                </input>
                <button className="search-submit-button">
                    <img src={search} />
                </button>
            </form>
            <div className="menu-buttons">
                <button className="menu-button" id="favorites-menu-button" onClick={currentPage == "list" ? favoritesButton : undefined}>Saved<img src={tack} /></button>
                <button className="menu-button" id="recents-menu-button" onClick={currentPage == "list" ? recentsButton : undefined}><img src={hourglass} />recent</button>
                <button className="menu-button" id="refresh-menu-button" onClick={currentPage == "list" ? refreshButton : undefined}>random<img src={refresh} /></button>
            </div>
        </div>
    )
}

export default Menu