import React from "react";

// import ReactDOM from 'react-dom';
// import {Component} from 'react'
import { v4 as uuidv4 } from 'uuid';

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            fullname: '',
            date: '',
            address: '',
            birthday: '',
            phonenumber: '',
            image: ''
        }
    }

    onChangeInput = (e, name) => {
        this.setState({
            id: uuidv4(),
            [name]: e.target.value,
        })
    }


    save = (e) => {
        e.preventDefault();
        let arr = document.getElementsByTagName("input")
        let newarr = [...arr]

        let checkinput = newarr.every(val => {  //kiểm tra 1 vài phần tử cso null hay không
            return val.value === ""
        })

        if (checkinput) {
            alert("nhập thiếu thông tin")
        } else {
            let data = JSON.parse(localStorage.getItem('list'))
            if (localStorage.getItem('list')) {
                data.push(this.state)
                localStorage.setItem('list', JSON.stringify(data))
            } else {
                data = []
                data.push(this.state)
                localStorage.setItem('list', JSON.stringify(data))
            }
        }
        let i;
        for (i = 0; i < newarr.length; i++) {
            newarr[i].value = ""
        }

        this.setState(
            {
                id: '',
                fullname: '',
                date: '',
                address: '',
                birthday: '',
                phonenumber: '',
                image: ''
            }
        )

        ///JSONstringify dùng để đưa dữ liệu về dạng chuỗi JSON
        //JSON.parse dùng để đưa dữ liệu về dạng 1 đối tượng

        // let x = localStorage.getItem('list');
        // const data = x ? JSON.parse(x) : [];
        // const { fullname, date, image } = this.state; 
        // data.push({
        //     id: uuidv4(),
        //     fullname,
        //     date,
        //     image
        // })
        // localStorage.setItem('list', JSON.stringify(data))
    }


    del = () => {
        localStorage.removeItem('list', JSON.stringify(this.state))
    }

    view = () => {
        let c = localStorage.getItem('list')
        console.log(c)
    }



    render() {
        return <div className="adduser">
            <form className="form-group" action="/">
                <label >nhập tên :{this.state.fullname}</label>
                <input onChange={(e) => this.onChangeInput(e, 'fullname')} name="inp" type="text" className="fullname" />
                <label>nhập ngày khởi tạo :{this.state.date}</label>
                <input onChange={(e) => this.onChangeInput(e, 'date')} name="inp" type="date" className="date" />
                <label>nhập địa chỉ :{this.state.address}</label>
                <input onChange={(e) => this.onChangeInput(e, 'address')} name="inp" type="text" className="address" />
                <label>nhập ngày sinh :{this.state.birthday}</label>
                <input onChange={(e) => this.onChangeInput(e, 'birthday')} name="inp" type="date" className="birthday" />
                <label>nhập số điện thoại :{this.state.phonenumber}</label>
                <input onChange={(e) => this.onChangeInput(e, 'phonenumber')} name="inp" type="number" className="phonenumber" />
                <label>tải ảnh lên :{this.state.image}</label>
                <input onChange={(e) => this.onChangeInput(e, 'image')} name="inp" type="text" className="image" />
                <button type="submit" onClick={this.save} className="btn-success mt-2 mb-2">submit</button>
            </form>
        </div>
    }
}

export default Form
