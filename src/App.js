import { useState } from "react";
import PhotoTagger from "./components/PhotoTagger";
import CharacterSelectionMenu from "./components/CharacterSelectionMenu";
import "./App.css";

function App() {
  const [menuIsOn, setMenusIsOn] = useState(false);

  function handleOnClick() {
    menuIsOn ? setMenusIsOn(false) : setMenusIsOn(true);
  }

  return (
    <div className="App" onClick={handleOnClick}>
      {menuIsOn && <CharacterSelectionMenu />}
      <PhotoTagger />
    </div>
  );
}

export default App;
