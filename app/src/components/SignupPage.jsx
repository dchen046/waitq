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

const handleRegister = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');
    const confirm_pass = formData.get('confirm_password');
    if (password === confirm_pass) {
        const url = `http://localhost:3000/api/register`;

        const body = JSON.stringify({
            email: email,
            password: password
        });
        
        const response = await fetch(url, {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: body
        });

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const result = await response.json();
        console.log(result);
    } else {
        console.log("password not the same");
    }
}

const SignupForm = () => {
    return (
        <div className=''>
            <Form onSubmit={handleRegister}>
                <FloatingLabel
                    controlId="email"
                    label="Email address"
                    className="mb-3"
                >
                    <Form.Control name="email" type="email" placeholder="name@example.com" autoComplete='off' />
                </FloatingLabel>

                <FloatingLabel
                    controlId="password"
                    label="Password"
                    className="mb-3"
                >
                    <Form.Control name='password' type="password" placeholder="password" />
                </FloatingLabel>

                <FloatingLabel
                    controlId="confirm_password"
                    label="Confirm Password"
                    className="mb-3"
                >
                    <Form.Control name="confirm_password" type="password" placeholder="password" />
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