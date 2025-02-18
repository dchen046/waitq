import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { Navigate, useNavigate } from 'react-router-dom';
import { useTokenStatusContext, useTokenUpdateContext } from '../context/TokenContext';
import Container from 'react-bootstrap/esm/Container';

const LoginPage = () => {
    const [error, setError] = useState("");
    const isValidToken = useTokenStatusContext();
    console.log(isValidToken.current);

    if (isValidToken.current) {
        return <Navigate to='/home' />
    } else {
        return (
            <Container className='center-content'>
                <h4 className='error-msg'>{error}</h4>
                <h4>Please Log In</h4>
                <LoginForm setError={setError} />
            </Container>
        );
    }
}

const LoginForm = ({ setError }) => {
    const navigate = useNavigate();
    const updateTokenStatus = useTokenUpdateContext();

    const handleLogin = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const url = `http://localhost:3000/api/auth/login`;

        const body = JSON.stringify({
            email: formData.get('email'),
            password: formData.get('password'),
        });

        const response = await fetch(url, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: body
        });

        if (!response.ok) console.log(`Response status: ${response.status}`);

        const result = await response.json();
        if (result.err) setError(result.err);
        else {
            console.log(result);
            localStorage.setItem('jwt', result.token);
            updateTokenStatus();
            navigate('/home');
        }
    }

    // const protectedBtn = async () => {
    //     const url = `http://localhost:3000/api/protected/post`;
    //     const response = await fetch(url, {
    //         method: "POST",
    //         headers: {
    //             'authorization': `Bearer ${localStorage.getItem('token')}`
    //         }
    //     })

    //     const result = await response.json();
    //     console.log(result);
    // }

    return (
        <div className=''>
            <Form
                onSubmit={handleLogin}
                id='login-form'
            >
                <FloatingLabel
                    controlId="email"
                    label="Email address"
                    className="mb-3"
                >
                    <Form.Control type="email" name='email' placeholder="name@example.com" autoComplete='off' />
                </FloatingLabel>

                <FloatingLabel
                    controlId="password"
                    label="Password"
                    className="mb-3"
                >
                    <Form.Control type="password" name='password' placeholder="password" />
                </FloatingLabel>

                <Button as="input" type="submit" value="Login" className='w-100' />
            </Form>
            <hr></hr>
            <div>
                <p> Don&apos;t Have An Account?</p>
                <Button variant='secondary' href='/signup' value='Sign Up' className='w-100'>Sign Up</Button>
                {/* <Button variant='warning' onClick={protectedBtn} value='proct'>Proct</Button> */}
            </div>
        </div>
    );
}

LoginForm.propTypes = {
    setError: PropTypes.func.isRequired,
    // setLoggedIn: PropTypes.func.isRequired
}

export default LoginPage;