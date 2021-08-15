import React from 'react'
import History from '../history/history'


class Table extends React.Component {
  constructor(props) {
    super(props)
    this.state = { lists: props.inf }
  }
 
  findinfo = (val) => {
    const pathname = {
       urldetail : `/Detail/${val}`
    }
    History.push(pathname.urldetail); // thêm địa chỉ vào đường dẫn
    History.go(pathname.urldetail) // đii đến địa chỉ nêu ra


    // let match = this.props //để xem các lệnh được phương thức này cung cấp
    // console.log(match)
  }


  render() {

    if (localStorage.getItem('list')) {
      return this.state.lists.map((value, index) => {
        return <tr key={index} onClick={()=>this.findinfo(value.id)}>
          <td>{value.fullname}</td>
          <td>{value.date}</td>
        </tr>
      })
    } else {
      return []
    }
  }
}

export default Table;

// export default createBrowserHistory();