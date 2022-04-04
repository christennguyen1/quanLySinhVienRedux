import React, { Component } from 'react'
import DanhSachSinhVien from '../DanhSachSinhVien/DanhSachSinhVien'
import ModalSinhVien from '../ModalSinhVien/ModalSinhVien'
import { connect } from 'react-redux'
import { SinhVienSer } from '../SinhVienSerVe/SinhVienSer'
import { SetDanhSachActions } from '../QuanLySinhVien-Redux/actions/QuanLySinhVienActions'


 class QuanLySinhVienAxios extends Component {
   
  componentDidMount(){
    SinhVienSer.layDanhSachSinhVien()
    .then((res)=>{
      console.log(res);
      this.props.setDssv(res.data)
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  
  render() {
    return (
      <div>
         <p className="display-3 pt-2 text-center">Quản lí sinh viên</p>
          <ModalSinhVien />
          <DanhSachSinhVien/>
      </div>
    )
  }
}

let mapDispatchToProps=(dispatch)=>{
  return {
    setDssv: (value)=>{
      dispatch(SetDanhSachActions(value))
    }
  }
}

export default connect(null,mapDispatchToProps)(QuanLySinhVienAxios)