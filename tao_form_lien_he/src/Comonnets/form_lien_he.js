import React from "react";
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";
import {toast} from 'react-toastify';


function Form_lien_he() {
    const notify = () => toast.success("Successfully submit");
    const handleSubmit = {
        notify();
        console.log(`${JSON.stringify(values)}`)
    };
    const initialValue = {
        name: "",
        email: "",
        phone: "",
        message: ""
    }
    function validateObject() {
        name: Yup.string()
            .required('Please enter your name')
            .min(2, "Mininum 2 characters")
            .max(20, "Maximum 20 characters"),
            email: Yup.string()
            .required('Please enter your email')
            .matches("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$", "Invalid email format"),
            // .email("Invalid email format"),
            phone: Yup.string()
            .required('Please enter your phone number');
    }

    return (
        <>
            <div className="container justify-content-center p-5">
                <h2>Contact Form</h2>
                <Formik
                    initialValues={initialValue}
                    onSubmit={handleSubmit}
                    validationSchema={Yup.object(validateObject)}>
                    {/*{({handleSubmit}) => (*/}
                    <Form>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <Field type="text" className="form-control" name="name" id="name"/>
                            <ErrorMessage name="name" component="span" className="text-danger"/>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <Field type="email" className="form-control" name="email" id="email"/>
                            <ErrorMessage name="email" component="span" className="text-danger"/>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">Phone</label>
                            <Field type="text" className="form-control" name="phone" id="phone"/>
                            <ErrorMessage name="phone" component="span" className="text-danger"/>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea className="form-control" name="message" id="message"/>
                            <ErrorMessage name="message" component="span" className="text-danger"/>
                        </div>

                        <div className="text-center">
                            <button type="submit" className="btn btn-outline-dark">Submit</button>
                        </div>
                    </Form>
                    {/*)}*/}


                </Formik>
            </div>
        </>
    )
}
export default Form_lien_he;