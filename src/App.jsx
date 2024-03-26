import { useState, useEffect } from 'react'
import Cuadrado from './components/Cuadrado';
import TextEndGame from './components/TextEndGame';
import TitleGame from './components/TitleGame';

function App() {
  const turn = { x: { name: 'X' }, o: { name: 'O' }}
  const [squareds, setSquareds] = useState(new Array(9).fill({name: null}));
  const [activeTurn, setActiveTurn] = useState(turn.x.name);
  const [userWin, setUserWin] = useState(null);
  const [endWithoutWinner, setEndWithoutWinner] = useState(false);

const selectedSquad = (indexSquad) => {
  const newSquareds = squareds.map((squad, index) => {
    if (index === indexSquad) {
      return {
        name: activeTurn,
        index: indexSquad,
      } 
    }
    return squad;
  });
setSquareds(newSquareds);
setActiveTurn(activeTurn === turn.x.name ? turn.o.name : turn.x.name);
};

const casesValidation = (firstI, secondI, thirdI) => {
   const validationWin = squareds[firstI]?.name === squareds[secondI]?.name
   && squareds[secondI]?.name === squareds[thirdI]?.name
   && squareds[firstI]?.name !== null
   && squareds[secondI]?.name !== null
   && squareds[thirdI]?.name !== null;

   return { isWinner: validationWin, nameWinner: squareds[firstI]?.name };
};

const winner = () => {
  const case1 = casesValidation(0, 1, 2);
  const case2 = casesValidation(3, 4, 5);
  const case3 = casesValidation(6, 7, 8);
  const case4 = casesValidation(0, 3, 6);
  const case5 = casesValidation(1, 4, 7);
  const case6 = casesValidation(2, 5, 8);
  const case7 = casesValidation(0, 4, 8);
  const case8 = casesValidation(2, 4, 6);
  const cases = [case1, case2, case3, case4, case5, case6, case7, case8];
  const isWin = cases.find((caseWin) => caseWin.isWinner) ?? null;
  const existsAvailableSquareds = squareds.some((squad) => squad.name === null);
  if (isWin) {
    setUserWin(isWin.nameWinner);
  } else if (!isWin && !existsAvailableSquareds) {
    setEndWithoutWinner(true);
  }
};

const playAgain = () => {
  const newSquareds = squareds.map((squad) => ({ name: null}));
  setActiveTurn(turn.x.name);
  setUserWin(null);
  setSquareds(newSquareds);
  setEndWithoutWinner(false);
};

useEffect(() => {
 winner();
}, [squareds]);

  return (
    <div className='container-squad'>
      <TitleGame userWin={userWin} endWithoutWinner={endWithoutWinner} activeTurn={activeTurn} />
      <div className='squads'>
        {
          squareds.map((squared, index) => (
            <Cuadrado
              key={index}
              disabled={userWin || endWithoutWinner ? true : false}
              name={squared?.name ?? ''}
              index={index}
              clickSquad={selectedSquad}
              activeTurn={activeTurn}
              userWin={userWin} 
              endWithoutWinner={endWithoutWinner} />  
          ))
        }
      </div>
        <TextEndGame userWin={userWin} endWithoutWinner={endWithoutWinner} playAgain={playAgain} />
    </div>
  )
}

export default App
