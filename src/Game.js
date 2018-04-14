import React, {Component} from 'react';
import Board from './Board'
import Status from './Status'
import Toggle from './Toggle'

import Heplers from './Helpers'

class Game extends Component {

  constructor (props) {
    super(props);
    this.state = {
      history : [{
        squares:Array(9).fill(null),
        lastPosition:null,
      }],
      asc:true,
      isDraw:false,
      stepNumber:0,
      xIsNext:true
    }
  }

  handleClick (i) {

    let history,current,squares;

    history = this.state.history.slice(0, this.state.stepNumber + 1);

    current = history[history.length - 1];

    squares =  current.squares.slice();

    if (Heplers.calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = (this.state.xIsNext) ? 'X' : 'O';

    this.setState({
        history: history.concat([{
          squares,
          lastPosition:i
        }]),
        isDraw: !Heplers.calculateWinner(squares) && (history.length  >= 9),
        stepNumber: history.length,
        xIsNext: !this.state.xIsNext,
    });


  }

  jumpTo (step) {
      this.setState({
        stepNumber: step,
        xIsNext: (step % 2) === 0,
      });
  }

  toggleAsc () {
    this.setState({
      asc:!this.state.asc
    })
  }

  getMoves (history,winner) {

    let moves =  history.map((step, move) => {

      const desc = move ?
        'Go to move #' + move + ', ( ' + Heplers.getRowsAndCols(step.lastPosition) + " )":
        'Go to game start';

      const style = {
        fontWeight:(this.state.stepNumber === move) ? 'bold' : "normal",
        color: winner && this.state.stepNumber === move ? 'green' : ''
      }

      return (
        <li key={move}>
          <button style={style} onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );

    });

    return (!this.state.asc) ? moves.sort(() => 1) : moves;

  }


  render () {

    const history = this.state.history;

    const current = history[this.state.stepNumber];

    const winner = Heplers.calculateWinner(current.squares);

    const moves = this.getMoves(history,winner);

    return (
      <div className="game">
        <div className="game-board">
          <Board squares={current.squares} winner={winner} onClick={(i) => this.handleClick(i)} />
        </div>
        <div className="game-info">
          <Status winner={winner} xIsNext={this.state.xIsNext} isDraw={this.state.isDraw} />
          <Toggle onClick={() => this.toggleAsc()} asc={this.state.asc} />
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }

}

export default Game
