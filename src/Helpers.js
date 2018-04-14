const Helpers =  {

  calculateWinner : (squares) => {

      let lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
      ]

      for (let i = 0;i < lines.length; i++){

        const [a,b,c] = lines[i];

        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
          return {
            winner:squares[a],
            combination:lines[i]
          };
        }

      }

      return null;

  },

  getRowsAndCols : (i) => {

    if (i !== null){

      return ('row' + (parseInt(i/3,10) + 1) + ', col' + (i - (parseInt(i/3,10) * 3) + 1) );

    }

    return null
  }

  
}

export default Helpers;
