import React from 'react'
import Helpers from './Helpers'

export default function Moves ({onClick , history, rowsCols, stepNumber, winner, asc }) {

  const moves =  history.map((move,step) => {

  console.log(move,step);
    const desc = move ?
      'Go to move #' + move + ', ( ' + Helpers.getRowsAndCols(move.lastPosition) + " )":
      'Go to game start';

    const style = {
      fontWeight:(stepNumber === move) ? 'bold' : "normal",
      color: winner && stepNumber === move ? 'green' : ''
    }

    return (
      <li key={step}>
        <button style={style} onClick={() => onClick(move)}>{desc}</button>
      </li>
    );
  })

  return (
    <ol>{(!asc) ? moves.sort(() => 1) : moves}</ol>
  )
}
