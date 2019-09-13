import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
// import Validation from './Validation';



class Form extends Component {

state={
    name:"",
    email:"",
    phone:"",
    password:"",
    confirmPassword:"",
    // Input Feedback
    nameFeedback:"form-control",
    emailFeedback:"form-control",
    phoneFeedback:"form-control",
    passwordFeedback:"form-control",
    confirmPasswordFeedback:"form-control",
}

handleChange=(event)=>{
    this.setState({[event.target.name]:event.target.value})
}
handleSubmit=(event)=>{
    event.preventDefault();
    this.onSubmit();
}

onSubmit=()=>{
    const formValues = this.state;
    const formStatus = this.validateRegistrationForm(formValues);
    console.log(formStatus)
    if(formStatus.isValid){
        this.clearErrors();
        this.submitForm(formValues);
    } else{
        this.clearErrors();
        this.highlightErrors(formStatus.result);
    }
}

submitForm(formValues){
    console.log("Submition Done");
    console.log(formValues);
}

highlightErrors(result){
    if(!result.name){
        this.setState({nameFeedback:"form-control is-invalid"})
    }
    if(!result.email){
        this.setState({emailFeedback:"form-control is-invalid"})
    }
    if(!result.phone){
        this.setState({phoneFeedback:"form-control is-invalid"})
    }
    if(!result.password){
        this.setState({passwordFeedback:"form-control is-invalid"})
    }
    if(!result.confirmPassword){
        this.setState({confirmPasswordFeedback:"form-control is-invalid"})
    }
  }

clearErrors(){
        this.setState({nameFeedback:"form-control is-valid"})
        this.setState({emailFeedback:"form-control is-valid"})
        this.setState({phoneFeedback:"form-control is-valid"})
        this.setState({passwordFeedback:"form-control is-valid"})
        this.setState({confirmPasswordFeedback:"form-control is-valid"})

}

// *****Validation Part*****
validateRegistrationForm(formValues){
    const result={  
        name:validateName(formValues.name),
        email:validateEmail(formValues.email),
        phone:validatePhone(formValues.phone),
        password:validatePassword(formValues.password),
        confirmpassword:validateConfirmPassword(formValues.password, formValues.confirmPassword),
    };

    let field;
    let isValid = true;

    for(field in result) {
        isValid = isValid && result[field];
    }
    return{
        isValid, result
    };

function validateName(name){
    return name.length>3;
}
function validateEmail(email){
    const emailRegEx=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return emailRegEx.test(email);
}
function validatePhone(phone){
    const phoneRegEx=/^\d{10}$/ ;
    return phoneRegEx.test(phone);
}
function validatePassword(password){
    const passRegEx=/^[a-zA-Z0-9$!@#%^&*()?.,]{8,}/g;
    return passRegEx.test(password);
}
function validateConfirmPassword(password, confirmPassword){
    return password===confirmPassword;
}
// *****Validation end******
}
    render() {
        return (
            <form onSubmit={this.handleSubmit}> 
            <div>
                <label htmlFor="name">Name </label> <br/>
                <input type="text" 
                name="name" 
                value={this.state.name} 
                placeholder="Enter Your Full Name...."
                onChange={this.handleChange}
                className={this.state.nameFeedback} required/>
            </div> <br/>
            <div>
                <label htmlFor="email">Email </label> <br/>
                <input type="email" 
                name="email" 
                value={this.state.email} 
                placeholder="Enter Your Email...."
                onChange={this.handleChange}
                className={this.state.emailFeedback} required/>
            </div> <br/>
            <div>
                <label htmlFor="phone">Phone Number </label> <br/>
                <input type="tel" 
                name="phone" 
                value={this.state.phone} 
                placeholder="Enter Your Phone Number...."
                onChange={this.handleChange}
                className={this.state.phoneFeedback} required/>
            </div> <br/>
            <div>
                <label htmlFor="password">Password </label> <br/>
                <input type="password" 
                name="password" 
                value={this.state.password} 
                placeholder="New Password...."
                onChange={this.handleChange}
                className={this.state.passwordFeedback} required/>
            </div> <br/>
            <div>
                <label htmlFor="confirmPassword">Confirm Password </label> <br/>
                <input type="password" 
                name="confirmPassword" 
                value={this.state.confirmPassword} 
                placeholder="Confirm Password...."
                onChange={this.handleChange}
                className={this.state.confirmPasswordFeedback} required/>
            </div>  <br/>
            <button type="submit" className="btn btn-primary">Submit</button> 
            </form>  
              
        )
    }
}

export default Form
