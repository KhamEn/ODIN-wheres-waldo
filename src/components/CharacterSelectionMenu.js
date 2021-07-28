import "./CharacterSelectionMenu.css";

function CharacterSelectionMenu({
  positionTop,
  positionLeft,
  handleCharacterSelection,
}) {
  const position = {
    top: `${positionTop}px`,
    left: `${positionLeft}px`,
  };

  function handleOnClick(e) {
    handleCharacterSelection(e.target.textContent);
  }

  return (
    <ul style={position} id="menu">
      <li onClick={handleOnClick}>Liara</li>
      <li onClick={handleOnClick}>Talia</li>
      <li onClick={handleOnClick}>Garrus</li>
    </ul>
  );
}

export default CharacterSelectionMenu;
