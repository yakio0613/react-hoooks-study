import React from 'react'

import Event from './Event'

const Events = ({state, dispatch}) => {
  return(
    <>
      <h4>イベント一覧</h4>
      <table>
      <thead className="table table-hover">
          <tr>
          <th>id</th>
          <th>タイトル</th>
          <th>ボディ</th>
          <th></th>
          </tr>
      </thead>
      <tbody>
          { state.map((event, index) => (<Event key={index} event={event} dispatch={dispatch} />)) }
      </tbody>
      </table>
    </>
  )
}

export default Events