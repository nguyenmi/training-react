import React from 'react'
import History from '../history/history'
const checkid = History.location.pathname.replace("/Detail/", "")
console.log(checkid)
class Tabledetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = { lists: props.inf }
    // console.log(History.location.pathname.replace("/Detail/",""))
  }

  render() {

    if (localStorage.getItem('list')) {
      return this.state.lists.map((value,index) => {
        if (value.id === checkid) {
          return <tr key={index}>
            <td>{value.fullname}</td>
            <td>{value.date}</td>
            <td>{value.address}</td>
            <td>{value.birthday}</td>
            <td>{value.phonenumber}</td>
            <td><img src={value.image} alt="" /></td>
          </tr>
        }else{
          return []
        }
      })

    } else {
      return []
    }
    // return <div>dsds</div>
  }
}

export default Tabledetail