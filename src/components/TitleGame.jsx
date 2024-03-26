
const TitleGame = ({userWin, endWithoutWinner, activeTurn}) => {
  return (
    <>
        {
            !userWin && !endWithoutWinner
            ?
            <h1>Es el turno del jugador: {activeTurn}</h1>
            :
            userWin
            ?
            <h1>¡Felicitaciones!</h1>
            :
            <h1>Sin ganador</h1>
        }
    </>
  )
}

export default TitleGame