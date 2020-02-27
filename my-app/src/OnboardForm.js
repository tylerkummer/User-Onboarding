import React, {useState, useEffect} from "react";
import {withFormik, Form, Field} from "formik";
import * as Yup from "yup";
import axios from "axios";

const OnboardForm =({values, errors, touched, status}) => {
    return (
        <div className ="onboard">
            <Form>
                <label htmlFor="onboard-name">Name </label>
                <Field name="onboard-name" type="text"/>
            </Form>
        </div>
    )
}

const FormikOnboardForm = withFormik({
    mapPropsToValues({name}){
        return {
            name: name || ""
        }
    }
})(OnboardForm);
export default FormikOnboardForm;