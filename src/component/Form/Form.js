import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

class Form extends Component {

state={
    name:"",
    email:"",
    phone:"",
    password:"",
    confirmPassword:""
}

//Need to use Arrow Function (Normal Function wont work)
handleChange=(event, fieldname)=>{
    this.setState({[fieldname]:event.target.value})
}

// Written below multiple function into above one single function
// handleChangeName=(event)=>{
//     this.setState({name:event.target.value});
// }
// handleChangeEmail=(event)=>{
//     this.setState({email:event.target.value});
// }
// handleChangePhone=(event)=>{
//     this.setState({phone:event.target.value});
// }
// handleChangePassword=(event)=>{
//     this.setState({password:event.target.value});
// }
// handleChangeConfirmPassword=(event)=>{
//     this.setState({confirmPassword:event.target.value});
// }
    render() {
        return (
            <>  
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" 
                name="name" 
                value={this.state.name} 
                placeholder="Enter Your Full Name...."
                onChange={(event)=>this.handleChange(event,"name")}/>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" 
                name="email" 
                value={this.state.email} 
                placeholder="Enter Your Email...."
                onChange={(event)=>this.handleChange(event,"email")}/>
            </div>
            <div>
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" 
                name="phone" 
                value={this.state.phone} 
                placeholder="Enter Your Phone Number...."
                onChange={(event)=>this.handleChange(event,"phone")}/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="text" 
                name="password" 
                value={this.state.password} 
                placeholder="Enter Your New Password...."
                onChange={(event)=>this.handleChange(event,"password")}/>
            </div>
            <div>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" 
                name="confirmPassword" 
                value={this.state.confirmPassword} 
                placeholder="Confirm Password...."
                onChange={(event)=>this.handleChange(event,"confirmPassword")}/>
            </div>
            {console.log(this.state)}
            
            </>
        )
    }
}

export default Form
