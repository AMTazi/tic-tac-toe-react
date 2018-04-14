import React from 'react';

export default function Status ({winner,isDraw,xIsNext}) {

  let status;

  if (winner) {

     status = 'The winner is: ' + (winner.winner)

  }else if (isDraw) {

     status = 'This game is a draw no one win start over.'

  }else {

     status = 'Next player is: ' + ( xIsNext ? 'X' : 'O');

  }

  return (
    <div className="status">{status}</div>
  )

}
