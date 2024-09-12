import { useState } from "react";
import { Alert, Button, Card, Container, FloatingLabel, Form, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
    let navigate = useNavigate();
    const [name, setName] = useState(null);
    const [account, setAccount] = useState(null);
    const [password, setPassword] = useState(null);
    const [confPassword, setConfPassword] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    async function handleRegister(event) {
        event.preventDefault();
        if (password !== confPassword) {
            setErrorMsg('Passwords do not match');
            return;
        }
        fetch("http://localhost:3001/user", {
            method: "POST",
            body: JSON.stringify({
                "name": name,
                "account": account,
                "password": password,
                "role": "user"
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then((response) => response.json())
            .then(() => navigate('/'));


    }

    return (<div className=" d-flex justify-content-center vh-100">
        <Row className="align-items-center">
            <Form onSubmit={handleRegister}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="logo512.png" />
                    <Card.Body>
                        {errorMsg && (
                            <Alert variant='danger'>
                                {errorMsg}
                            </Alert>
                        )}
                        <Form.Group>
                            <FloatingLabel

                                controlId="name"

                                label="Name"
                                className="mb-3"
                            >

                                <Form.Control required name="name" onChange={(event) => { setName(event.target.value); console.log(name) }} placeholder="Enter name" />
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group>
                            <FloatingLabel

                                controlId="account"

                                label="Account"
                                className="mb-3"
                            >

                                <Form.Control required name="account" onChange={(event) => { setAccount(event.target.value); console.log(account) }} placeholder="Enter account" />
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group>
                            <FloatingLabel

                                controlId="password"
                                label="Password"
                                className="mb-3"
                            >

                                <Form.Control required name="password" onChange={(event) => { setPassword(event.target.value); console.log(password) }} type="password" placeholder="Enter account" />
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group>
                            <FloatingLabel

                                controlId="confirmpassword"
                                label="Confirm Password"
                                className="mb-3"
                            >

                                <Form.Control required name="password" onChange={(event) => { setConfPassword(event.target.value); console.log(confPassword) }} type="password" placeholder="Enter account" />
                            </FloatingLabel>
                        </Form.Group>
                        <div className="d-grid block">
                            <Button type="submit" className="" variant="primary">Sign Up</Button>

                        </div>
                        <br></br>
                        <Container className="d-flex justify-content-between">
                            <Link to="/">Login</Link>
                            <Link to="/forgot">Forgot Password</Link>
                        </Container>


                    </Card.Body>
                </Card>
            </Form>


        </Row>

    </div >)
}
export default SignUpPage