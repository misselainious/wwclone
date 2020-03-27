import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';
import { runInThisContext } from 'vm';

class Authbox extends Component {
    state = {
        password: 'yes',
        confirmpassword: ''
    };
   // Handles updating component state when the user types into the input field
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

    handleConfirmPassword = event => {
        event.preventDefault();
        if(this.state.password === this.state.confirmpassword){
            alert("YES")
        }
        else{
            alert("boo...")
        }
       
    }


    render() {
        return (
            <div>
                <Form >
                <Form.Input style={{width:'250px', marginBottom:'30px'}} fluid icon='lock' type='password' name="confirmpassword" iconPosition='left' placeholder='password' onChange={this.handleInputChange}/>
                <Button style={{margin: '100px'}} onClick={this.handleConfirmPassword}>Button</Button>
                </Form>
            </div>
        );
    }
}

export default Authbox;