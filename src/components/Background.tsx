import '../css/Background.css'
import { context } from './Provider';
import { useEffect, useState, useContext , createContext } from 'react';
import b0 from "/BoardBackgrounds/0.png";
import b1 from "/BoardBackgrounds/1.png";
import b2 from "/BoardBackgrounds/2.png";
import l0 from "/ListBackgrounds/0.png";
import l1 from "/ListBackgrounds/1.png";
import l2 from "/ListBackgrounds/2.png";


function Background() {
    const { listScroll, setListScroll } = context();
    const { boardScroll, setBoardScroll } = context();
    const { currentPage, setCurrentPage } = context();
    const [ images, setImages ] = useState<HTMLImageElement[]>();
    const [ backgroundIndexes, setBackgroundIndexes ] = useState<number[]>([0, 0]);
    

    const boardBackgrounds = [b0, b1, b2];
    const listBackgrounds = [l0, l1, l2];
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
        loadImages([b0, b1, b2, l0, l1, l2]).then((is) => {
            console.log("Images Loaded!");
            setImages(is);
        }).catch(function (err) {
            console.error(err);
        });
    }, []);

    useEffect(() => {
        // setBackgroundIndexes([Math.floor(Math.random() * 3), Math.floor(Math.random() * 3)]);
        // console.log(images? images[backgroundIndexes[0]].src : "Give me FIVE seconds!");
        if(currentPage === "list") {
            setBackgroundIndexes([backgroundIndexes[0], Math.floor(Math.random() * 3)]);
        } else {
            setBackgroundIndexes([Math.floor(Math.random() * 3), backgroundIndexes[1]]);
        }
    
    }, [currentPage]);


    return (
        <div id="background">
            <img className="background-image" 
                // src={currentPage === "list" ? "ListBackgrounds/" + backgroundIndexes[0] + ".png" : "BoardBackgrounds/" + backgroundIndexes[1] + ".png"} 
                src={
                    currentPage === "list" ?
                    (images? listBackgrounds[backgroundIndexes[0]] : "/ImageLoading.svg") :
                    (images? boardBackgrounds[backgroundIndexes[1]] : "/ImageLoading.svg")
                } 
                // src={currentPage === "list" ? (images?[backgroundIndexes[0]] : "null") : (images?[backgroundIndexes[1]] : "null")} 
                style={{ transform: `translate(-50%, -${offset}%)` }}></img>
        </div>
    )
}

export default Background