import React from "react";
import { useState } from "react";
import { Alert, Button, Card, Container, FloatingLabel, Form, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import { login } from "../services/auth";
import { useForm } from "react-hook-form"
import { navigateLogin } from "../services/navigation";

const LoginPage = () => {

    const {
        register,
        handleSubmit,
        // watch,
        formState: { errors },
    } = useForm();


    let navigate = useNavigate();

    const [errorMsg, setErrorMsg] = useState(null);
    async function onSubmit(data) {
        console.log(data);
        const user = await login(data.account, data.password);
        console.log(user);
        navigateLogin(navigate, user);
        
    }

    return (<div className=" d-flex justify-content-center vh-100">
        <Row className="align-items-center">
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img className="px-5" variant="top" src="logo512.png" />
                    <Card.Body>
                        {errorMsg && (
                            <Alert variant='danger'>
                                {errorMsg}
                            </Alert>
                        )}
                        <Form.Group>
                             <FloatingLabel
                                controlId="account"
                                label="Account"
                                className="mb-3"
                            >
                                <Form.Control required name="account"  placeholder="Enter account" {...register("account", { required: true })} />
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group>
                            <FloatingLabel

                                controlId="password"
                                label="Password"
                                className="mb-3"
                            >

                                <Form.Control required name="password"  type="password" placeholder="Enter account" {...register("password", { required: true })} />
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