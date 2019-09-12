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
        this.setState({errorName:"Enter Valid Name!"})
    }
    if(!result.email){
        this.setState({errorEmail:"Enter Valid Email!"})
    }
    if(!result.phone){
        this.setState({errorPhone:"Enter Valid Phone!"})
    }
    if(!result.password){
        this.setState({errorPassword:"Enter Valid Password!"})
    }
    if(!result.confirmPassword){
        this.setState({errorConfirmPassword:"Password Not Matched!"})
    }
  }

clearErrors(){
        this.setState({errorName:""})
        this.setState({errorEmail:""})
        this.setState({errorPhone:""})
        this.setState({errorPassword:""})
        this.setState({errorConfirmPassword:""})

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
                onChange={this.handleChange}/>
                <p>{this.state.errorName}</p>
            </div>
            <div>
                <label htmlFor="email">Email </label> <br/>
                <input type="email" 
                name="email" 
                value={this.state.email} 
                placeholder="Enter Your Email...."
                onChange={this.handleChange}/>
                <p>{this.state.errorEmail}</p>
            </div>
            <div>
                <label htmlFor="phone">Phone Number </label> <br/>
                <input type="tel" 
                name="phone" 
                value={this.state.phone} 
                placeholder="Enter Your Phone Number...."
                onChange={this.handleChange}/>
                <p>{this.state.errorPhone}</p>
            </div>
            <div>
                <label htmlFor="password">Password </label> <br/>
                <input type="password" 
                name="password" 
                value={this.state.password} 
                placeholder="New Password...."
                onChange={this.handleChange}/>
                <p>{this.state.errorPassword}</p>
            </div>
            <div>
                <label htmlFor="confirmPassword">Confirm Password </label> <br/>
                <input type="password" 
                name="confirmPassword" 
                value={this.state.confirmPassword} 
                placeholder="Confirm Password...."
                onChange={this.handleChange}/>
                <p>{this.state.errorConfirmPassword}</p>
            </div>  <br/>
            <button type="submit">Submit</button> 
            </form>    
        )
    }
}

export default Form
