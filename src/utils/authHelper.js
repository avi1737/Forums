export function validateEmail(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export function validatePassword(password){
    if(password.length < 8){
        return false;
    }
    return true;
}

export function validateInputs(firstName, lastName, email , errors){
    if( firstName !== '' && lastName !== '' && email !== '' && errors){
        return true;
    }
    else{
        return false;
    }
}