import { useState } from "react";
import { Button, Form } from "react-bootstrap";


const ProfileForm = () => {
    const user = JSON.parse(localStorage.getItem('current-business'));
    const [isDisabled, setDisabled] = useState(true);

    const handleSave = async (e) => {
        e.preventDefault();
        setDisabled(true);
        const formData = new FormData(e.currentTarget);
        const [name, email, phone, address] = formData.values();

        const body = JSON.stringify({
            name,
            email,
            phone,
            address
        });

        const url = `http://localhost:3000/api/profile/update`;
        const auth = `Bearer ${localStorage.getItem('jwt')}`;

        const response = await fetch(url, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                'authorization': auth
            },
            body: body
        });

        if (!response.ok) console.log(`Response status: ${response.status}`);
        else {
            console.log('updated!');
            const result = await response.json();
            localStorage.setItem('current-business', JSON.stringify(result.profile));
        }
    }

    const handleEdit = () => {
        setDisabled(false);
    }

    return (
        <Form onSubmit={handleSave}>
            <Form.Group className="mb-3 me-3" controlId="business-name">
                <Form.Label className='p-0'>Name</Form.Label>
                <Form.Control
                    type='text'
                    name='business-name'
                    placeholder="Business Name"
                    aria-label="Business Name"
                    value={user.name}
                    readOnly
                />
            </Form.Group>
            <Form.Group className="mb-3 me-3" controlId="business-email" >
                <Form.Label className='p-0'>Email</Form.Label>
                <Form.Control
                    type='email'
                    name='business-email'
                    placeholder="Business Email"
                    aria-label="Business Email"
                    defaultValue={user.email}
                    disabled={isDisabled}
                />
            </Form.Group>
            <Form.Group className="mb-3 me-3" controlId="business-phone">
                <Form.Label className='p-0'>Phone</Form.Label>
                <Form.Control
                    type='tel'
                    name='business-phone'
                    placeholder="Business Phone"
                    aria-label="Business Phone"
                    defaultValue={user.phone}
                    disabled={isDisabled}
                />
            </Form.Group>
            <Form.Group className="mb-3 me-3" controlId="business-address">
                <Form.Label className='p-0'>Address</Form.Label>
                <Form.Control
                    type='text'
                    name='profile-address'
                    placeholder="Business Address"
                    aria-label="Business Address"
                    defaultValue={user.address}
                    disabled={isDisabled}
                />
            </Form.Group>
            <Button
                variant="warning"
                className="me-2"
                onClick={handleEdit}>
                Edit
            </Button>

            <Button
                variant="primary"
                disabled={isDisabled}
                type="submit"
            >
                Save
            </Button>
        </Form>
    )
}

export default ProfileForm;