import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

class Form extends Component {

state={
    name:"",
    email:"",
    phone:"",
    gender:"",
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
    if(formStatus.isValid){
        this.clearErrors();
        this.submitForm(formValues);
    } else{
        this.clearErrors();
        this.highlightErrors(formStatus.result);
    }
}

submitForm(formValues){
    const formOutput={
        name:this.state.name,
        email:this.state.email,
        phone:this.state.phone,
        gender:this.state.gender,
        password:this.state.password,
        confirmPassword:this.state.confirmPassword
    }
    console.log("Submition Done");
    console.log(formOutput);
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
    if(!result.gender){
        this.setState({genderFeedbackGreen:""})
        this.setState({genderFeedbackRed:"Please choose a gender!"})
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
        this.setState({genderFeedbackRed:""})
        this.setState({genderFeedbackGreen:"Looks good!"})
        this.setState({passwordFeedback:"form-control is-valid"})
        this.setState({confirmPasswordFeedback:"form-control is-valid"})

}

// *****Validation Part*****
validateRegistrationForm(formValues){
    const result={  
        name:validateName(formValues.name),
        email:validateEmail(formValues.email),
        phone:validatePhone(formValues.phone),
        gender:validateGender(formValues.gender),
        password:validatePassword(formValues.password),
        confirmPassword:validateConfirmPassword(formValues.password, formValues.confirmPassword),
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
function validateGender(gender){
   return gender!=="";
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
                id="name"
                className={this.state.nameFeedback} required/>
            </div> <br/>
            <div>
                <label htmlFor="email">Email </label> <br/>
                <input type="email" 
                name="email" 
                value={this.state.email} 
                placeholder="Enter Your Email...."
                onChange={this.handleChange}
                id="email"
                className={this.state.emailFeedback} required/>
            </div> <br/>
            <div>
                <label htmlFor="phone">Phone Number </label> <br/>
                <input type="tel" 
                name="phone" 
                value={this.state.phone} 
                placeholder="Enter Your Phone Number...."
                onChange={this.handleChange}
                id="phone"
                className={this.state.phoneFeedback} required/>
            </div> <br/>
            <div>
            <label>Gender</label> <br/>
            <div className="form-check form-check-inline">
                <input type="radio"
                name="gender" 
                value="male"
                id="gender-input-1"
                onChange={this.handleChange}
                className="form-check-input gender-input"/> 
                <label htmlFor="gender-input-1">Male</label>
            </div>
            <div className="form-check form-check-inline">
                    <input type="radio" 
                    name="gender" 
                    value="female"
                    onChange={this.handleChange}
                    id="gender-input-2"
                    className="form-check-input gender-input"/> 
                    <label htmlFor="gender-input-2">Female</label>
            </div>
            <p style={{color: "red"}}>{this.state.genderFeedbackRed}
            <span style={{color: "green"}}>{this.state.genderFeedbackGreen}</span></p>  
            </div>
            <div>
                <label htmlFor="password">Password </label> <br/>
                <input type="password" 
                name="password" 
                value={this.state.password} 
                placeholder="New Password...."
                onChange={this.handleChange}
                id="password"
                className={this.state.passwordFeedback} required/>
            </div> <br/>
            <div>
                <label htmlFor="confirmpassword">Confirm Password </label> <br/>
                <input type="password" 
                name="confirmPassword" 
                value={this.state.confirmPassword} 
                placeholder="Confirm Password...."
                onChange={this.handleChange}
                id="confirmpassword"
                className={this.state.confirmPasswordFeedback} required/>
            </div>  <br/>
            <button type="submit" className="btn btn-primary">Submit</button> 
            </form>  
              
        )
    }
}

export default Form
