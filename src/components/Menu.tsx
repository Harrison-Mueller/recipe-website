function Menu() {

    return (
        <div id="menu">
            <input type="search" id="search-bar" placeholder="Search 🔍" ></input>
            <button className="menu-button" id="favorites-menu-button">favorites</button>
            <button className="menu-button" id="recents-menu-button">recents</button>
            <button className="menu-button" id="refresh-menu-button">refresh</button>
        </div>
    )
}

export default Menu