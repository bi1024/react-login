import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
        const response = await fetch('http://localhost:3001/user/');
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
                        {/* <FontAwesomeIcon icon="fa-regular fa-user" /> */}
                        {errorMsg && (
                            <Alert variant='danger'>
                                {errorMsg}
                            </Alert>
                        )}

                        <Form.Group>
                            
                        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464l349.5 0c-8.9-63.3-63.3-112-129-112l-91.4 0c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z"/></svg>                         */}
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
                        <div className="d-grid block">

                            <Button type="submit"  className="" variant="primary">Login</Button>
                        </div>
                        <br/>
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