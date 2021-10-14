import { useEffect } from "react";
import RegisterForm from "../../components/account/RegitserForm";
import PageCenter from "../../components/common/PageCenter";

const Register = () => {

    useEffect(() => {
        document.title = "Teenagerforums - Register"
    },[]);

    return(
        <PageCenter child = {RegisterForm}/>
    )
}

export default Register;