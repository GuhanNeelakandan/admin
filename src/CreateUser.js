import { useFormik } from 'formik'
import React, { useContext } from "react";
import { Link, useNavigate } from 'react-router-dom';
import UserContext from './UserContext';


function CreateUser() {
    const navigate=useNavigate();
    let userContext=useContext(UserContext)
    let formik = useFormik({
        initialValues: {
            employeeId:0,
            name: "",
            position: "",
            office: "",
            age: 0,
            startDate: "",
            salary: 0,
        },
        validate: (values) => {
            const errors = {}
            if (!values.name) {
                errors.name = "Requried";
            } else if (values.name.length > 15) {
                errors.name = "must be 15 characters or less"
            }
            if (!values.age) {
                errors.age = "Requried";
            } else if (values.age < 18) {
                errors.age = "must be above 18"
            }
            return errors;
        },
        onSubmit: values => {
            userContext.setUsers([...userContext.users,values])
        }
    })
    return (
        <div className="container">
            <form onSubmit={formik.handleSubmit}>
                <div className="row">
                <div className="col-lg-6">
                        <label>Emply.ID</label>
                        <input
                            type={'number'}
                            name="id"
                            onChange={formik.handleChange}
                            value={formik.values.id}
                            className="form-control" />
                    </div>
                    <div className="col-lg-6">
                        <label>Name<span style={{ color: "red" }}>*{formik.errors.name}</span></label>
                        <input
                            type={'text'}
                            name="name"
                            onChange={formik.handleChange}
                            value={formik.values.name}
                            className="form-control" />
                    </div>
                    <div className="col-lg-6">
                        <label>Position</label>
                        <input
                            type={'text'}
                            name="position"
                            onChange={formik.handleChange}
                            value={formik.values.position}
                            className="form-control" />
                    </div>
                    <div className="col-lg-6">
                        <label>Office</label>
                        <input
                            type={'text'}
                            name="office"
                            onChange={formik.handleChange}
                            value={formik.values.office}
                            className="form-control" />
                    </div>
                    <div className="col-lg-6">
                        <label>Age<span style={{ color: "red" }}>*{formik.errors.age}</span></label>
                        <input
                            type={'number'}
                            name="age"
                            onChange={formik.handleChange}
                            value={formik.values.age}
                            className="form-control" />
                    </div>
                    <div className="col-lg-6">
                        <label>Start date</label>
                        <input
                            type={'date'}
                            name="startDate"
                            onChange={formik.handleChange}
                            value={formik.values.startDate}
                            className="form-control" />
                    </div>
                    <div className="col-lg-6">
                        <label>Salary</label>
                        <input type={'number'}
                            name="salary"
                            onChange={formik.handleChange}
                            value={formik.values.salary}
                            className="form-control" />
                    </div>
                    
                </div>
                <div className="col-lg-6 mt-3">
                        <input disabled={Object.keys(formik.errors).length!==0} type={'submit'}
                         onClick={()=>navigate(-1)}
                         className="btn btn-primary" />
                    </div>
            </form>
        </div>
    )
}
export default CreateUser;