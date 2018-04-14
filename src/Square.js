import React from 'react';

export default function Square ({value,onClick,style}) {

  return (
      <button className="square" style={style} onClick={() => onClick()}> {value}</button>
    );

}
