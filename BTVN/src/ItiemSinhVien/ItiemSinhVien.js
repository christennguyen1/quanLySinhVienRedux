import React, { Component } from 'react'
import { connect } from 'react-redux';
import { SuaDanhSachActions, XoaDanhSachActions } from '../QuanLySinhVien-Redux/actions/QuanLySinhVienActions';

 class ItiemSinhVien extends Component {
  render() {
      let {sv} = this.props;
    return (
          <tr>
          <td>{sv.id}</td>
          <td>{sv.name}</td>
          <td>{sv.email}</td>
          <td>{sv.phone}</td>
          <td  className="flex">
              <button className="btn btn-success"
              data-toggle="modal" data-target="#myModal"
              onClick={()=>{
                this.props.handleSuaSinhVien(sv);
              }}
              >Sửa</button>
              <button className="btn btn-danger" 
              onClick={()=>{
                this.props.handleXoaSinhVien(sv.id);
              }}
              >Xóa</button>
          </td>
          </tr>
    )
  }
}

let mapDispatchToProps=(dispatch)=>{
  return {
    handleXoaSinhVien:(value)=>{
      dispatch(XoaDanhSachActions(value))
    },
    handleSuaSinhVien:(value)=>{
      dispatch(SuaDanhSachActions(value))
    }
  }
}

export default connect(null,mapDispatchToProps)(ItiemSinhVien)