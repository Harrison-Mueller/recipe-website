import '../css/Background.css'
import { context } from './Provider';


function Background() {
    const { listScroll, setListScroll } = context();
    const { boardScroll, setBoardScroll } = context();
    const { currentPage, setCurrentPage } = context();
    let offset = (currentPage === "list" ? listScroll : boardScroll) * 27;

    return (
        <div id="background">
            <img className="background-image" src={currentPage === "list" ? "ListBackgrounds/2.png" : "BoardBackgrounds/2.png"} style={{ transform: `translate(-50%, -${offset}%)` }}></img>
        </div>
    )
}

export default Background