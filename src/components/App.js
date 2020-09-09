import React, { useReducer, useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'

import Event from './Event'
import reducer from '../reducers'

const App = () => {
  const [ state, dispatch ] = useReducer(reducer, [])
  const [title, setTitle ] = useState('')
  const [ body, setBody ] = useState('')
  const addEvent = e => {
    e.preventDefault()

    dispatch({
      type: 'CREATE_EVENT',
      title,
      body
    })

    setTitle('')
    setBody('')
  }

  const deleteAllEvents = e => {
    e.preventDefault()

    const result = window.confirm('全てのイベントを削除してもよろしいですか？')
    if(result) dispatch({ type: 'DELETE_ALL_EVENT' })
  }

 const unCreateble = title === '' || body === ''

  return (
    <div className="container-fluid">
      <h4>イベント作成</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">タイトル</label>
          <input className="form-control" id="formEventTitle" value={title} onChange={e => setTitle(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="formEventBody">ボディ</label>
          <textarea className="form-control" id="formEventBody" value={body} onChange={e => setBody(e.target.value)} />
        </div>
        <button className="btn btn-primary" onClick={addEvent} disabled={unCreateble}>イベント作成</button>
        <button className="btn btn-danger" onClick={ deleteAllEvents } disabled={state.length === 0}>全て削除</button>
      </form>
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
    </div>
  )
}

export default App
