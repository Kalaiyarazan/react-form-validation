import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
// import Validation from './Validation';

class Form extends Component {

state={
    name:"",
    email:"",
    phone:"",
    password:"",
    confirmPassword:""
}

handleChange=(event)=>{
    this.setState({[event.target.name]:event.target.value})
}
handleSubmit=(event)=>{
    event.preventDefault();
    console.log(this.state)
}

    render() {
        return (
            <form onSubmit={this.handleSubmit}>  
            <div>
                <label htmlFor="name">Name </label>
                <input type="text" 
                name="name" 
                value={this.state.name} 
                placeholder="Enter Your Full Name...."
                onChange={this.handleChange}/>
            </div>
            <div>
                <label htmlFor="email">Email </label>
                <input type="email" 
                name="email" 
                value={this.state.email} 
                placeholder="Enter Your Email...."
                onChange={this.handleChange}/>
            </div>
            <div>
                <label htmlFor="phone">Phone Number </label>
                <input type="tel" 
                name="phone" 
                value={this.state.phone} 
                placeholder="Enter Your Phone Number...."
                onChange={this.handleChange}/>
            </div>
            <div>
                <label htmlFor="password">Password </label>
                <input type="text" 
                name="password" 
                value={this.state.password} 
                placeholder="Enter Your New Password...."
                onChange={this.handleChange}/>
            </div>
            <div>
                <label htmlFor="confirmPassword">Confirm Password </label>
                <input type="password" 
                name="confirmPassword" 
                value={this.state.confirmPassword} 
                placeholder="Confirm Password...."
                onChange={this.handleChange}/>
            </div>
            <button type="submit">Submit</button>
            </form>
            
            
        )
    }
}

export default Form
