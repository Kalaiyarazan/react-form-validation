import React, { Component } from 'react';
import Form from './component/Form/Form';

class App extends Component {
    
    render() {
        return (
            <div>
            <h2 style={{textAlign:"center", marginTop:30}}>Registration Form</h2>
            <Form/>
            </div>
        )
    }
}

export default App
