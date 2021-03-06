import React, { useEffect, useRef, useState } from "react";
import CharacterSelectionMenu from "./components/CharacterSelectionMenu";
import ErrorMessage from "./components/ErrorMessage";
import GameControl from "./components/GameControl";
import GameStatus from "./assets/GameStatus";
import GAME_IMAGE from "./assets/me-characters.png";
import {
  getCharacterLocation,
  initializeDatabase,
} from "./assets/CharactersLocationsDB";

import "./App.css";

function App() {
  const NUM_OF_CHARACTERS = 3;
  const canvas = useRef(null);
  const cursorPosition = useRef({ x: 0, y: 0 });
  const characterSelectionMenu = useRef(null);
  const charactersFound = useRef(new Set());
  const errorMessage = useRef(null);
  const [gameStatus, setGameStatus] = useState(GameStatus.INACTIVE);
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  useEffect(() => {
    //  Display the game image
    const context = canvas.current.getContext("2d");
    const img = new Image();
    img.onload = function () {
      canvas.current.width = img.naturalWidth;
      canvas.current.height = img.naturalHeight;
      context.drawImage(img, 0, 0);
    };
    img.src = GAME_IMAGE;

    initializeDatabase();
  }, []);

  function toggleCharacterMenu(e) {
    if (!cursorIsWithinCanvas(e)) {
      if (menuIsVisible) {
        setMenuIsVisible(false);
      }
      return;
    }
    menuIsVisible ? setMenuIsVisible(false) : setMenuIsVisible(true);

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

  function handleCharacterSelection(characterName) {
    const name = characterName.toLowerCase();
    if (charactersFound.current.has(name)) {
      return;
    }

    // find characters
    if (name === "liara" && findCharacter(getCharacterLocation("liara"))) {
      charactersFound.current.add("liara");
      placeCheckmark();
    } else if (
      name === "garrus" &&
      findCharacter(getCharacterLocation("garrus"))
    ) {
      charactersFound.current.add("garrus");
      placeCheckmark();
    } else if (
      name === "talia" &&
      findCharacter(getCharacterLocation("talia"))
    ) {
      charactersFound.current.add("talia");
      placeCheckmark();
    } else {
      displayErrorMessage(characterName);
    }

    if (charactersFound.current.size === NUM_OF_CHARACTERS) {
      setGameStatus(GameStatus.FINISHED);
    }
  }

  function findCharacter(characterLocation) {
    const context = canvas.current.getContext("2d");
    return context.isPointInPath(
      characterLocation,
      cursorPosition.current.x,
      cursorPosition.current.y
    );
  }

  function displayErrorMessage(characterName) {
    errorMessage.current = (
      <ErrorMessage
        positionX={cursorPosition.current.x}
        positionY={cursorPosition.current.y}
        characterName={characterName}
      />
    );
    setShowErrorMessage(true);
    setTimeout(() => {
      setShowErrorMessage(false);
    }, 2000);
  }

  function placeCheckmark() {
    const appDiv = document.getElementById("App");
    const checkmark = document.createElement("div");
    checkmark.style.position = "absolute";
    checkmark.style.left = `${cursorPosition.current.x}px`;
    checkmark.style.top = `${cursorPosition.current.y}px`;
    checkmark.textContent = "???";
    appDiv.appendChild(checkmark);
  }

  return (
    <div id="App" className="App" onClick={toggleCharacterMenu}>
      <GameControl
        status={gameStatus}
        startGame={() => {
          setGameStatus(GameStatus.ACTIVE);
        }}
        stopGame={() => {
          setGameStatus(GameStatus.INACTIVE);
        }}
      />
      {menuIsVisible && characterSelectionMenu.current}
      {showErrorMessage && errorMessage.current}
      <canvas ref={canvas} />
    </div>
  );
}

export default App;
