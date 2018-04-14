import React from 'react'

export default function Toggle (props) {

  return  (

    <div>

      <button onClick={() => props.onClick()}>{ props.asc ? "DESC" : "ASC" }</button>

    </div>

   );

}
