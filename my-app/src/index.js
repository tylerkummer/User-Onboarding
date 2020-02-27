import React from "react";
import ReactDOM from "react-dom";
import FormikOnboardForm from "./OnboardForm";

function App(){
    return (
        <div className ="App">
            <FormikOnboardForm />
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"));