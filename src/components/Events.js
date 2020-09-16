import React, { useContext } from 'react'

import Event from './Event'
import AppContext from '../context/AppContext'

const Events = () => {
  const { state } = useContext(AppContext)
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
          { state.map((event, index) => (<Event key={index} event={event} />)) }
      </tbody>
      </table>
    </>
  )
}

export default Events