import React from 'react'
import Tabledetail from '../tabledetail/tbldetail'
function Detail() {
  const ipotdata = JSON.parse(localStorage.getItem('list'))
  return (
    <table className="table">
      <thead>
        <tr>
          <th>fullname</th>
          <th>date-create</th>
          <th>address</th>
          <th>birthday</th>
          <th>phone number</th>
          <th>image</th>
        </tr>
      </thead>
      <tbody>
        <Tabledetail inf={ipotdata} />
      </tbody>
    </table>
  )
}

export default Detail