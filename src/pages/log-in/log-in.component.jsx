import React from 'react'
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import { Link } from 'react-router-dom';

import './log-in.styles.scss';

class LogIn extends React.Component {
    render() {
        return (
            <div className='login'>
                <Container>
                    <Form className='login-form'>
                        <FormGroup>
                            <Label for="exampleEmail">E-mail</Label>
                            <Input type="email" name="email" id="exampleEmail" placeholder="Alamat e-mail" required/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input type="password" name="password" id="examplePassword" placeholder="Password" required/>
                        </FormGroup>
                        
                        <div className="login-footer d-flex justify-content-between align-items-center">
                            <Button color='light'>Login</Button>
                            <span className='ask-account'>Belum punya akun? Daftar <Link to='/register'>di sini</Link></span>
                        </div>
                    </Form>
                </Container>
            </div>
        );
    };
};

export default LogIn;