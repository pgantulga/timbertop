import { Container } from "react-bootstrap"
import Card from "../../components/common/card";
import { Form } from 'react-bootstrap';
import { useState, useRef } from "react";
import SubmitButton from "../../components/common/submitButton";


function Register() {
    const [user, setUser] = useState({
        userName: '',
        email: '',
        password: ''
    })
    const [loading, setLoading] = useState(false);
    const { username, email, password } = user;
    const passwordConfirm = useRef;


    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        if (password !== passwordConfirm.current.value) {
            console.log('Passwords dont match');
            setLoading(false);
            return
        }
    }

    const onChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    return (
        <>
            <Container>
                <Card title='Register'>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="username">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="username"
                                name="username"
                                required
                                value={username}
                                onChange={onChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Email"
                                name="email"
                                value={email}
                                onChange={onChange}

                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name="password" onChange={onChange}
                                value={password} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name="password" value={passwordConfirm} onChange={onChange}
                                required />
                        </Form.Group>
                        <SubmitButton>
                            {loading ? ' ... ' : 'Submit'}
                        </SubmitButton>
                    </Form>
                </Card>
            </Container>
        </>
    )
}

export default Register;
