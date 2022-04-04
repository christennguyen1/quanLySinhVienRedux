import axios from "axios";


const BASE_URL="https://62494d6f20197bb46271495a.mockapi.io/sv";

export const SinhVienSer = {
    layDanhSachSinhVien: ()=>{
        return axios({
            method:"GET",
            url: BASE_URL,
        })
    }
}