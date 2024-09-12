import { useState } from "react";
import { Alert, Button, Card, Container, FloatingLabel, Form, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    let navigate = useNavigate();
    const [account, setAccount] = useState(null);
    const [password, setPassword] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    async function  handleLogin(event) {
        event.preventDefault();
        console.log('utte');
        const response = await fetch('http://localhost:3001/user');
        const data = await response.json();
         data.map(item=>{if(account===item.account && password===item.password){ 
            if(item.role==='admin'){
                navigate('/admin');
                return;
            }
            else {navigate('/home');
                return;
            }
        }else{setErrorMsg('Account Not Found')}});
        
    }

    return (<div className=" d-flex justify-content-center vh-100">
        <Row className="align-items-center">
            <Form onSubmit={handleLogin}>
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

                                controlId="account"

                                label="Account"
                                className="mb-3"
                            >

                                <Form.Control name="account" onChange={(event) => { setAccount(event.target.value); console.log(account) }} placeholder="Enter account" />
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group>
                            <FloatingLabel

                                controlId="password"
                                label="Password"
                                className="mb-3"
                            >

                                <Form.Control name="password" onChange={(event) => { setPassword(event.target.value); console.log(password) }} type="password" placeholder="Enter account" />
                            </FloatingLabel>
                        </Form.Group>
                        <div className="d-grid block">

                            <Button type="submit"  className="" variant="primary">Login</Button>
                        </div>
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