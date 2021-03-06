import React, {useState, useEffect} from "react";
import {withFormik, Form, Field} from "formik";
import * as Yup from "yup";
import axios from "axios";

const OnboardForm =({values, errors, touched, status}) => {
    const[users, setUsers] = useState([]);
    useEffect(() => {
        console.log("Status: ", status);
        status && setUsers(users => [...users, status]);
    }, [status]);
    return (
        <div className ="onboard">
            <Form style={{display: "flex", flexDirection: "column", margin: "0 auto", width: "25%"}}>
                <label htmlFor="name">Name </label>
                <Field name="name" type="text" placeholder="name"/>
                {touched.name && errors.name && (<p className="errors">{errors.name}</p>)}
                <label htmlFor="email">Email </label>
                <Field name="email" type="email" placeholder="email"/>
                {touched.email && errors.email && (<p className="errors">{errors.email}</p>)}
                <label htmlFor="password">Password </label>
                <Field name="password" type="password" placeholder="password"/>
                {touched.password && errors.password && (<p className="errors">{errors.password}</p>)}
                <label htmlFor="role">Role </label>
                <Field as="select" name="role">
                    <option disabled>Choose a Role</option>
                    <option value="ui-ux">UI/UX</option>
                    <option value="front-end">Front End</option>
                    <option value="back-end">Back End</option>
                </Field>
                <label htmlFor="checkbox">Terms of Service </label>
                <Field name="checkbox" type="checkbox" placeholder="TOS"/>
                <button type="submit">Submit!</button>
            </Form>
            {users.map(item => {
                return(
                    <ul key={item.id}>
                        <li>Name: {item.name}</li>
                        <li>Email: {item.email}</li>
                        <li>Role: {item.role}</li>
                    </ul>
                );
            })}
        </div>
    )
}

const FormikOnboardForm = withFormik({
    mapPropsToValues({name, email, password, role, checkbox}){
        return {
            name: name || "",
            email: email || "",
            password: password || "",
            role: role || "",
            checkbox: checkbox || false
        }
    },

    validationSchema: Yup.object().shape({
        name: Yup.string().required("Please Enter Name"),
        email: Yup.string().required("Please Enter a Password"),
        password: Yup.string().required("Please Enter a Password")
    }),

    handleSubmit(values, {setStatus, resetForm}){
        console.log("Values Submitted: ", values);
        axios.post("https://reqres.in/api/users", values)
        .then(response => {
            console.log("Success", response);
            setStatus(response.data);
            resetForm();
        })
        .catch(error => console.log(error.response));
    }
})(OnboardForm);
export default FormikOnboardForm;