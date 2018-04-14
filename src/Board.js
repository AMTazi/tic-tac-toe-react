import React, {Component} from 'react';
import Square from './Square'

class Board extends Component {

  renderSquare (i) {
    const win = this.props.winner && !(this.props.winner.combination.indexOf(i) < 0)
    const style = {
      fontWeight: win ? 'bold' : "normal",
      color: win ? 'green' : ''
    }
    return (
      <Square
        key={i}
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
        style={style}
      />
    );
  }

  render () {

    let squares = Array(3).fill(null).map((a,ia) => (<div key={ia} className="board-row">
      {
        Array(3).fill(null).map((b,ib) => this.renderSquare((ia > 0) ? (ia * 3) + ib : ib))
      }
    </div>) )

    return (
      <div>
        {squares}
      </div>
    );
  }
}

export default Board
