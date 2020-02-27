import React, {useState, useEffect} from "react";
import {withFormik, Form, Field} from "formik";
import * as Yup from "yup";
import axios from "axios";

const OnboardForm =({values, errors, touched, status}) => {
    return (
        <div className ="onboard">
            <Form style={{display: "flex", flexDirection: "column", margin: "0 auto", width: "25%"}}>
                <label htmlFor="name">Name </label>
                <Field name="name" type="text" placeholder="name"/>
                <label htmlFor="email">Email </label>
                <Field name="email" type="email" placeholder="email"/>
                <label htmlFor="password">Password </label>
                <Field name="password" type="password" placeholder="password"/>
                <label htmlFor="checkbox">Terms of Service </label>
                <Field name="checkbox" type="checkbox" placeholder="TOS"/>
                <button type="submit">Submit!</button>
            </Form>
        </div>
    )
}

const FormikOnboardForm = withFormik({
    mapPropsToValues({name, email, password, checkbox}){
        return {
            name: name || "",
            email: email || "",
            password: password || "",
            checkbox: checkbox || false
        }
    }
})(OnboardForm);
export default FormikOnboardForm;