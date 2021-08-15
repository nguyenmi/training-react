import React from 'react'
import Table from '../tableinfo/tblinfo'

function Pageinfo() {
  const ipotdata = JSON.parse(localStorage.getItem('list'))
  return (
    <table className="table">
      {/* <caption>bảng thông tin</caption> */}
      <thead>
        <tr>
          <th>fullname</th>
          <th>date-create</th>
        </tr>
      </thead>
      <tbody>
        <Table inf={ipotdata}/>
      </tbody>
    </table>
  )
}

export default Pageinfo