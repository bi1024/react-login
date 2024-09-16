import React, { useContext, useEffect, useState } from "react";
import { Alert, Button, Card, Container, FloatingLabel, Form, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import { login } from "../services/auth";
import { useForm } from "react-hook-form"
import { navigateLogin } from "../services/navigation";
// import { Context } from "../App";
import AuthContext from "../contexts/AuthProvider";

const LoginPage = () => {
    const { auth, setAuth } = useContext(AuthContext);
    const {
        register,
        handleSubmit,
        // watch,
        formState: { errors },
    } = useForm();

    let navigate = useNavigate();

    // useEffect(() => {
    //     console.log('ue');
    //     console.log(auth);
    //     if (auth) {
    //         navigateLogin(navigate, auth);
    //     }
    // }, [auth]);

    const [errorMsg, setErrorMsg] = useState(null);
    async function onSubmit(data) {
        console.log(data);
        let found = await login(data.account, data.password, setErrorMsg, setAuth);
        navigateLogin(navigate,found);
        // navigateLogin(navigate, auth);
        // console.log(user);
        // setUser(user);//của useContext, em chưa sử dụng
        // navigateLogin(navigate, user);
        // console.log(errors);
    }
    return (<div className=" d-flex justify-content-center vh-100">
        <Row className="align-items-center">
            <Form onSubmit={handleSubmit(onSubmit)} noValidate >{/*Let react hook form handle validation*/}
                <Card style={{ width: '18rem' }}>
                    <Card.Img className="px-5" variant="top" src="logo512.png" />
                    <Card.Body>
                        {errorMsg && (
                            <Alert variant='danger'>
                                {errorMsg}
                            </Alert>
                        )}
                        <Form.Group>
                            <FloatingLabel controlId="account" label="Account" className="mb-3">
                                <Form.Control required placeholder="Enter account" {...register("account", {
                                    required: 'Username is required'
                                })} />
                            </FloatingLabel>
                            <p>{errors.account?.message}</p>
                        </Form.Group>
                        <Form.Group>
                            <FloatingLabel controlId="password" label="Password" className="mb-3">
                                <Form.Control required type="password" placeholder="Enter account" {...register("password", {
                                    required: 'Password is required'
                                })} />
                                <p>{errors.password?.message}</p>
                            </FloatingLabel>
                        </Form.Group>
                        <div className="d-grid block">
                            <Button type="submit" className="" variant="primary">Login</Button>
                        </div>
                        <br />
                        <Container className="d-flex justify-content-between">
                            <Link to="/signup">Sign Up</Link>
                            <Link to="/forgot">Forgot Password</Link>
                        </Container>
                    </Card.Body>
                </Card>
            </Form>
        </Row>
    </div >)
}
export default LoginPage