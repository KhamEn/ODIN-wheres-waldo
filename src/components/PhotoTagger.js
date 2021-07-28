import React, {useEffect, useRef} from 'react';
import "./phototagger.css"
import GAME_IMAGE from "../assets/me-characters.png";

function PhotoTagger() {
    const canvas = useRef(null);

    useEffect(() => {
        const context = canvas.current.getContext("2d");
        const img = new Image();
        img.onload = function () {
            canvas.current.width = img.naturalWidth;
            canvas.current.height = img.naturalHeight;
            context.drawImage(img, 0, 0);
        }
        img.src = GAME_IMAGE;
    }, []);

    return (
        <canvas ref={canvas} id="canvas"/>
    );
}

export default PhotoTagger;