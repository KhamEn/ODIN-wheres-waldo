import "./CharacterSelectionMenu.css";

function CharacterSelectionMenu({ positionTop, positionLeft }) {
  const position = {
    top: `${positionTop}px`,
    left: `${positionLeft}px`,
  };

  return (
    <ul style={position} id="menu">
      <li>Liara</li>
      <li>Talia</li>
      <li>Garrus</li>
    </ul>
  );
}

export default CharacterSelectionMenu;
