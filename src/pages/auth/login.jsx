import { Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";


// Locals
import Card from "../../components/common/card";


const Login = () => {
    return (
        <>
            <Container>
                <Card title="Login">
                    <Form>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="password" />
                        </Form.Group>

                    </Form>
                    <div>
                        <span>Not signed up yet? &nbsp;
                            <Link to="/register">Sign Up</Link>
                        </span>
                    </div>
                </Card>
            </Container>
        </>
    )
}

export default Login

// <Form>
//       <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
//         <Form.Label>Email address</Form.Label>
//         <Form.Control type="email" placeholder="name@example.com" />
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
//         <Form.Label>Example textarea</Form.Label>
//         <Form.Control as="textarea" rows={3} />
//       </Form.Group>
//     </Form>