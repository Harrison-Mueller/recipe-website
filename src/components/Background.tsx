import '../css/Background.css'
import { context } from './Provider';
import { useEffect, useState, useContext , createContext } from 'react';
// import b0 from "/BoardBackgrounds/0-1440p.png";
// import b1 from "/BoardBackgrounds/1-1440p.png";
// import b2 from "/BoardBackgrounds/2-1440p.png";
// import l0 from "/ListBackgrounds/0-1440p.png";
// import l1 from "/ListBackgrounds/1-1440p.png";
// import l2 from "/ListBackgrounds/2-1440p.png";


function Background() {
    const { listScroll, setListScroll } = context();
    const { boardScroll, setBoardScroll } = context();
    const { currentPage, setCurrentPage } = context();
    const [ backgroundResolution, setBackgroundResolution ] = useState("0");
    const [ backgroundIndexes, setBackgroundIndexes ] = useState<number[]>([0, 0]);
    

    // const boardBackgrounds = [b0, b1, b2];
    // const listBackgrounds = [l0, l1, l2];
    let offset = (currentPage === "list" ? listScroll : boardScroll) * 27;


    function loadImages (images: string[]) {
        let loader = function (src: string) {
          return new Promise<HTMLImageElement>(function (resolve, reject) {
            let img = new Image();
            img.onload = function () {
              resolve(img);
            };
            img.onerror = function (err) {
              reject(err);
            };
            img.src = src;
          });
        };

        let loaders: Promise<HTMLImageElement>[] = [];
        images.forEach(function (image: string) {
          loaders.push(loader(image));
        });

        return Promise.all(loaders);
    }

    useEffect(() => {
        window.addEventListener('resize', updateResolution);
        updateResolution();
    }, []);

    const updateResolution = () => {

        const windowSize = Math.max(window.innerWidth / 16 * 9, window.innerHeight);
        const vertical = window.innerHeight * 9 >= window.innerWidth * 16 ? "v" :
            (window.innerHeight >= window.innerWidth? "s" : "");

        if(windowSize >= 1440 && vertical == "") {
            setBackgroundResolution("1440");
        } else if(windowSize >= 1080) {
            setBackgroundResolution("1080" + vertical);
        } else {
            setBackgroundResolution("720" + vertical);
        }
        console.log("Window Change!");
    }

    useEffect(() => {
        // setBackgroundIndexes([Math.floor(Math.random() * 3), Math.floor(Math.random() * 3)]);
        // console.log(images? images[backgroundIndexes[0]].src : "Give me FIVE seconds!");
        if(currentPage === "list") {
            console.log("Switching to LIST");
            setBackgroundIndexes([backgroundIndexes[0], Math.floor(Math.random() * 3)]);
        } else {
            console.log("Switching to BOARD");
            setBackgroundIndexes([Math.floor(Math.random() * 3), backgroundIndexes[1]]);
        }
    
    }, [currentPage]);

    const activeBackground = currentPage === "list" ? backgroundIndexes[0] : backgroundIndexes[1] + 3;
    
 


    return (
        <div id="background">
            <img className={"list-background-image " + (activeBackground === 0 ? "active" : "hidden-preload")}
                src={ "/ListBackgrounds/0p" + backgroundResolution + ".png" } 
                style={{ transform: `translate(-50%, -${offset}%)`}} 
                aria-hidden={activeBackground === 0 ? "false" : "true"}
            />
            <img className={"list-background-image " + (activeBackground === 1 ? "active" : "hidden-preload")}
                src={ "/ListBackgrounds/1p" + backgroundResolution + ".png" } 
                style={{ transform: `translate(-50%, -${offset}%)`}} 
                aria-hidden={activeBackground === 2 ? "false" : "true"}
            />
            <img className={"list-background-image " + (activeBackground === 2 ? "active" : "hidden-preload")}
                src={ "/ListBackgrounds/2p" + backgroundResolution + ".png" } 
                style={{ transform: `translate(-50%, -${offset}%)`}} 
                aria-hidden={activeBackground === 3 ? "false" : "true"}
            />

            <img className={"board-background-image " + (activeBackground === 3 ? "active" : "hidden-preload")}
                src={ "/BoardBackgrounds/0p" + backgroundResolution + ".png" } 
                style={{ transform: `translate(-50%, -${offset}%)`}} 
                aria-hidden={activeBackground === 4 ? "false" : "true"}
            />
            <img className={"board-background-image " + (activeBackground === 4 ? "active" : "hidden-preload")}
                src={ "/BoardBackgrounds/0p" + backgroundResolution + ".png" } 
                style={{ transform: `translate(-50%, -${offset}%)`}} 
                aria-hidden={activeBackground === 5 ? "false" : "true"}
            />
            <img className={"board-background-image " + (activeBackground === 5 ? "active" : "hidden-preload")}
                src={ "/BoardBackgrounds/0p" + backgroundResolution + ".png"} 
                style={{ transform: `translate(-50%, -${offset}%)`}} 
                aria-hidden={activeBackground === 6 ? "false" : "true"}
            />
        </div>
    )
}

export default Background