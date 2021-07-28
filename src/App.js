import React, { useEffect, useRef, useState } from "react";
import CharacterSelectionMenu from "./components/CharacterSelectionMenu";
import "./App.css";
import GAME_IMAGE from "./assets/me-characters.png";
import {
  liara as liaraLocation,
  garrus as garrusLocation,
  talia as taliaLocation,
} from "./assets/CharactersLocations";

function App() {
  const canvas = useRef(null);
  const cursorPosition = useRef({ x: 0, y: 0 });
  const characterSelectionMenu = useRef(null);
  const [menuIsOn, setMenusIsOn] = useState(false);

  useEffect(() => {
    const context = canvas.current.getContext("2d");
    const img = new Image();
    img.onload = function () {
      canvas.current.width = img.naturalWidth;
      canvas.current.height = img.naturalHeight;
      context.drawImage(img, 0, 0);
    };
    img.src = GAME_IMAGE;
  }, []);

  function toggleCharacterMenu(e) {
    if (!cursorIsWithinCanvas(e)) {
      if (menuIsOn) {
        setMenusIsOn(false);
      }
      return;
    }
    menuIsOn ? setMenusIsOn(false) : setMenusIsOn(true);

    // position the menu
    const rect = canvas.current.getBoundingClientRect();
    cursorPosition.current.x = e.clientX - rect.left;
    cursorPosition.current.y = e.clientY - rect.top;
    characterSelectionMenu.current = (
      <CharacterSelectionMenu
        positionLeft={cursorPosition.current.x}
        positionTop={cursorPosition.current.y}
        handleCharacterSelection={handleCharacterSelection}
      />
    );
  }

  function cursorIsWithinCanvas(e) {
    const rect = canvas.current.getBoundingClientRect();
    return (
      e.clientX <= rect.right &&
      e.clientX >= rect.left &&
      e.clientY >= rect.top &&
      e.clientY <= rect.bottom
    );
  }

  function handleCharacterSelection(character) {
    const context = canvas.current.getContext("2d");

    // find characters
    if (
      character === "Liara" &&
      context.isPointInPath(
        liaraLocation,
        cursorPosition.current.x,
        cursorPosition.current.y
      )
    ) {
      // placeCheckmark();
      console.log("Found liara");
    } else if (
      character === "Garrus" &&
      context.isPointInPath(
        garrusLocation,
        cursorPosition.current.x,
        cursorPosition.current.y
      )
    ) {
      // placeCheckmark();
      console.log("Found garrus");
    } else if (
      character === "Talia" &&
      context.isPointInPath(
        taliaLocation,
        cursorPosition.current.x,
        cursorPosition.current.y
      )
    ) {
      // placeCheckmark();
      console.log("Found talia");
    } else {
      // displayError();
      console.log("Found none");
    }
  }

  // only if outside of canvas
  function handleOnClick(e) {
    // const rect = canvas.current.getBoundingClientRect();
    // console.log(`clientX: ${e.clientX}, clientY: ${e.clientY}`);
    // console.log(`rectX: ${rect.left}, rectY: ${rect.top}`);
  }

  return (
    <div className="App" onClick={toggleCharacterMenu}>
      {menuIsOn && characterSelectionMenu.current}
      <canvas ref={canvas} onClick={toggleCharacterMenu} />
    </div>
  );
}

export default App;
