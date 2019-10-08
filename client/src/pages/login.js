import React, { Component, Fragment } from 'react';
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import AuthService from '../components/login/AuthService';

class Login extends Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.decode = this.decode.bind(this);
        this.Auth = new AuthService();
    }
    render() {
        // console.log('this login', this);

        return (
            <Fragment>
                <Grid textAlign='center' style={{ height: '475px', marginBottom: '300px' }} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 450}}>
                        <Header as='h3' textAlign='center' style={{ marginBottom: '30px', marginTop: '190px'}}>
                            {/* <Image src='/logo.png' />  */}
                            Please enter the password to view this content.
                        </Header>
                        <Form size='large' onSubmit={this.handleFormSubmit}>
                            <Segment raised>
                                <Form.Input fluid icon='lock' type='password' name="username" iconPosition='left' placeholder='password' onChange={this.handleChange} />
                                {/* <Form.Input
                                    fluid
                                    name="password"
                                    icon='lock'
                                    iconPosition='left'
                                    placeholder='Password'
                                    type='password'
                                    onChange={this.handleChange}
                                /> */}

                                <Button className="seeAllWinesBtn" size='small'>
                                    <p className="seeAllWinesText" fluid size='large'>
                                        Login
                            </p></Button>
                            </Segment>
                        </Form>
                        <Header as='h5' textAlign='center' style={{ marginTop: '50px', marginBottom: '100px'}}>
                            This section is for clients only. To gain access, contact your sales rep or the order desk at orders@winewise.biz.
                        </Header>
                        <Link to='/'>
                        <Button> Back to Home
                            </Button>
                            </Link>
                    </Grid.Column>
                </Grid>
            </Fragment>
        );
    }

    handleChange(e) {
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
        // console.log(this);
    }

    handleFormSubmit(e) {
        e.preventDefault();
   
        this.Auth.login(this.state.username,this.state.password)
            .then(res =>{
                
                // console.log('referrer', document.referrer);
                // const redirRoute = document.referrer.split('://')[1].split('/');
                // console.log("route:" , redirRoute);
                const newLocation = sessionStorage.getItem('referrer');
                sessionStorage.removeItem('referrer');
            this.props.history.replace(newLocation);
            //window.history.back();

            })
            .catch(err => {
                alert(err);
            })
    }

    decode(e) {
        e.preventDefault();
        this.Auth.loggedIn()
    }
}

export default Login;