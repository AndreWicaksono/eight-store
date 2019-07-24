import React from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';

import './register.styles.scss';

class Register extends React.Component {
    render() {
        return (
            <div className='register'>
                <Container>
                    <h1 className='text-center'>Buat Akun</h1>
                    <Form className='register-form'>
                        <FormGroup>
                            <Label for="fullname">Nama Lengkap</Label>
                            <input className='form-control' name='fullname' type="text" placeholder='Nama Lengkap' />
                        </FormGroup>
                        <FormGroup>
                            <Label for="phone">No. Handphone</Label>
                            <input className='form-control' name='phone' type="number" min="5" max="15" placeholder='0812345678' />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleEmail">E-mail</Label>
                            <Input type="email" name="email" id="exampleEmail" placeholder="Alamat e-mail" required/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input type="password" name="password" id="examplePassword" placeholder="Password" required/>
                        </FormGroup>
                        <FormGroup check>
                        <Label check>
                            <Input type="checkbox" />{' '}
                            <p>Dengan ini saya telah membaca dan menyetujui seluruh syarat dan ketentuan yang berlaku di website 8-store.</p>
                        </Label>
                        </FormGroup>
                        <div className="login-footer d-flex justify-content-between align-items-center">
                            <Button color='light'>Buat akun</Button>
                        </div>
                    </Form>
                </Container>
            </div>
        );
    };
};

export default Register;