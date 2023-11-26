import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as StudentService from "../../services/StudentService";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function StudentCreate() {

    const navigate = useNavigate();

    const initiValue = {
        name: "",
        email: "",
        phone: "",
        message: ""
    }

    const validateObiect = {
        name: Yup.string().required("Không được để trống"),
        email: Yup.string().required("Không được để trống"),
        phone: Yup.string().required("Không được để trống"),
        message: Yup.string().required("Không được để trống")
    }
    

    const CreateStudent = async (values) => {
 const student = {
    ...values,
 }
            await StudentService.saveStudent(student)
            .then(()=>{
                toast.success("Thêm mới thành công")
                navigate("/students")
            })
            .catch(()=>{
                toast.error("Thêm mới thất bại")
            })
       
    }

    return (
        <>
            <div style={{ textAlign: "center", margin: "20px" }}>
                <Formik
                    initialValues={initiValue}
                    onSubmit={(values) => {
                        CreateStudent(values);
                    }}
                    validationSchema={Yup.object(validateObiect)}
                >
                    <Form>
                        <div>
                            <h2>Thêm mới học sinh</h2>
                        </div>
                        <div>
                            <label>Tên Học Sinh</label><br />
                            <Field type={"text"} name={"name"} id={"name"} /><br />
                            <ErrorMessage style={{ color: "red" }} name={"name"} component={"name"} />
                        </div>
                        <div>
                            <label>Email Học Sinh</label><br />
                            <Field type={"text"} name={"email"} id={"email"} /><br />
                            <ErrorMessage style={{ color: "red" }} name={"email"} component={"email"} />
                        </div>
                        <div>
                            <label>Số Điện Thoại</label><br />
                            <Field type={"text"} name={"phone"} id={"phone"} /><br />
                            <ErrorMessage style={{ color: "red" }} name={"phone"} component={"phone"} />
                        </div>
                        <div>
                            <label>Mô tả</label><br />
                            <Field type={"text"} name={"message"} id={"message"} /><br />
                            <ErrorMessage style={{ color: "red" }} name={"message"} component={"message"} />
                        </div>
                        <div>
                            <button type={"submit"}>Save</button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </>
    )
}


export default StudentCreate;