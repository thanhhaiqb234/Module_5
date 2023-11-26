import React from "react";
import {useState , useEffect} from "react";
import {NavLink} from "react-router-dom";
import * as StudentServer from "../../services/StudentService"


function StudentList() {
    const [students, setStudents] = useState();

    const getAllStudent = async () => {
            let data = await StudentServer.getAll();
            setStudents(data);
    }
    useEffect(() =>{
        getAllStudent();
    },[])

    if (!students){
        return null;
    }
    

    return (
        <>
            {/*<input value={nameSearch} onChange={(evt) => setNameSearch(evt.target.value)}/>*/}
            <NavLink to="/create">
                <button style={{margin:"20px"}}>Thêm mới</button>
            </NavLink>
            <h1 style={{textAlign: "center" }}>Danh sách học sinh lớp </h1>
            <table className={"table table-hover"}>
                <thead>
                <tr>
                    <th>STT</th>
                    <th>Tên</th>
                    <th>Tuổi</th>
                    <th>Giới tính</th>
                    <th>Ngôn ngữ</th>
                </tr>
                </thead>
                <tbody>
                {students.map((item, index) => (
                    <tr key={item.id}>
                        <td>{index+1}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td>{item.message}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    )
}

export default StudentList;