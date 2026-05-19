import '../css/Background.css'
import { context } from './Provider';
import { useEffect, useState, useContext , createContext } from 'react';


function Background() {
    const { listScroll, setListScroll } = context();
    const { boardScroll, setBoardScroll } = context();
    const { currentPage, setCurrentPage } = context();
    // const [ images, setImages ] = useState<HTMLImageElement[]>();
    const [ backgroundIndexes, setBackgroundIndexes ] = useState<number[]>([0, 0]);
    
    let offset = (currentPage === "list" ? listScroll : boardScroll) * 27;

    // useEffect(() => {
    //     const imgs = [];
    //     for(let i = 0; i < 6; i++) {
    //         imgs.push(new Image());
    //     }

    //     imgs[0].src = "/ListBackgrounds/0.png";
    //     imgs[1].src = "/ListBackgrounds/1.png";
    //     imgs[2].src = "/ListBackgrounds/2.png";

    //     imgs[2].src = "/BoardBackgrounds/0.png";
    //     imgs[3].src = "/BoardBackgrounds/1.png";
    //     imgs[4].src = "/BoardBackgrounds/2.png";

    //     setImages(imgs);
    // }, []);

    useEffect(() => {
        setBackgroundIndexes([Math.floor(Math.random() * 3), Math.floor(Math.random() * 3)]);
    }, [currentPage]);


    return (
        <div id="background">
            <img className="background-image" 
                src={currentPage === "list" ? "ListBackgrounds/" + backgroundIndexes[0] + ".png" : "BoardBackgrounds/" + backgroundIndexes[1] + ".png"} 
                style={{ transform: `translate(-50%, -${offset}%)` }}></img>
        </div>
    )
}

export default Background