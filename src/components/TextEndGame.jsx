
const TextEndGame = ({userWin, endWithoutWinner, playAgain}) => {
  return (
    <div>
        {
            userWin &&
                <div>
                    <h1>El ganador es el jugador: {userWin} </h1>
                    <button onClick={() => playAgain()} className='play-again'>Comenzar de nuevo</button>
                </div>
        }
        {
            endWithoutWinner &&
                <div>
                    <h1>Esta vez no hubo ganador </h1>
                    <button onClick={() => playAgain()} className='play-again'>Comenzar de nuevo</button>
                </div>
        }
    </div>
  )
}

export default TextEndGame