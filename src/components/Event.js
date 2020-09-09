import React from 'react'

const Event = ({ dispatch, event }) => {
  const id = event.id
  const hundleClickDeleteButton = () =>{
    const result = window.confirm(`イベント (id = ${id}) を削除してもよろしいですか？`)
      if(result) dispatch({type: 'DELETE_EVENT', id: id})
  }
  return (
  <tr>
      <td>{ id }</td>
      <td>{ event.title }</td>
      <td>{ event.body }</td>
      <td>
      <button type="button" className="btn btn-danger" onClick={hundleClickDeleteButton}>削除</button>
      </td>
  </tr>
  )
}

export default Event