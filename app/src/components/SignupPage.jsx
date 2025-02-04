import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';

const SignupPage = () => {
    return (
        <div>
            <h4>Create An Account</h4>
            <SignupForm />
        </div>

    );
}

const SignupForm = () => {
    return (
        <div className=''>
            <Form action='' method='POST'>
                <FloatingLabel
                    controlId="email"
                    label="Email address"
                    className="mb-3"
                >
                    <Form.Control type="email" placeholder="name@example.com" autoComplete='off' />
                </FloatingLabel>

                <FloatingLabel
                    controlId="password"
                    label="Password"
                    className="mb-3"
                >
                    <Form.Control type="password" placeholder="password" />
                </FloatingLabel>

                <FloatingLabel
                    controlId="password"
                    label="Confirm Password"
                    className="mb-3"
                >
                    <Form.Control type="password" placeholder="password" />
                </FloatingLabel>

                <Button as="input" type="submit" value="Signup" className='w-100' />
            </Form>
            <hr></hr>
            <div>
                <p> Already Have An Account?</p>
                <Button variant='secondary' href='/' className='w-100'>Log in</Button>
            </div>
        </div>
    );
}

export default SignupPage;