import React, { useEffect, useRef, useState } from "react";
import CharacterSelectionMenu from "./components/CharacterSelectionMenu";
import "./App.css";
import GAME_IMAGE from "./assets/me-characters.png";

function App() {
  const canvas = useRef(null);
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
    menuIsOn ? setMenusIsOn(false) : setMenusIsOn(true);
    // position the menu
    const rect = canvas.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    characterSelectionMenu.current = (
      <CharacterSelectionMenu positionLeft={x} positionTop={y} />
    );
  }

  return (
    <div className="App" onClick={toggleCharacterMenu}>
      {menuIsOn && characterSelectionMenu.current}
      <canvas ref={canvas} />
    </div>
  );
}

export default App;
