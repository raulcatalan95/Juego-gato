import { useState } from "react";

const Cuadrado = ({name, index, clickSquad, disabled, activeTurn, userWin, endWithoutWinner}) => {
  const [isMouseOver, setIsMouseOver] = useState(false);

  const mouseOver = () => {
    if (!name && !userWin && !endWithoutWinner) {
      setIsMouseOver(true);
    }
  };
  const mouseLeave = () => {
    setIsMouseOver(false);
  };

  return (
    <button
    disabled={disabled}
    onMouseOver={() => mouseOver()}
    onMouseLeave={() => mouseLeave()}
    onClick={() => clickSquad(index)}
    className={`squad ${name && 'squad-selected'}`}>
      {
        isMouseOver && !name
        ?
        activeTurn
        :
        name
      } 
    </button>
  )
}

export default Cuadrado