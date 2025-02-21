import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useRef } from 'react';
import Container from 'react-bootstrap/esm/Container';
import PropTypes from 'prop-types';

// hr:mins
// default 15 mins from current time
const getWaittime = (mins = 15) => {
    const date = new Date(new Date().getTime() + (mins * 60000));
    const hour = ('0' + date.getHours()).slice(-2);
    const min = ('0' + date.getMinutes()).slice(-2);

    return `${hour}:${min}`;
}

const AddWaitlistForm = ({ handleClose }) => {
    const waittime = useRef(getWaittime());

    const handlePicker = (e) => {
        e.currentTarget.showPicker();
        console.log(e.currentTarget.value);
    }

    const handleWaitlistSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const url = `http://localhost:3000/api/waitlist/add-waitlist`;
        const auth = `Bearer ${localStorage.getItem('jwt')}`
        const current = JSON.parse(localStorage.getItem('current-business'));

        const body = JSON.stringify({
            name: formData.get('wait-name'),
            size: formData.get('wait-size'),
            phone: formData.get('wait-phone'),
            time: formData.get('wait-time'),
            b_name: current.name
        })

        const response = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'authorization': auth
            },
            body: body
        });

        if (!response.ok) console.log(`Response status: ${response.status}`);
        else {
            handleClose();
        }
    }

    return (
        <>
            <Container>
                <Form className='d-flex' onSubmit={handleWaitlistSubmit}>
                    <div>
                        <Form.Group className="mb-3 me-3" controlId="wait-name">
                            <Form.Label className='p-0'>Name:</Form.Label>
                            <Form.Control
                                type='text'
                                name='wait-name'
                                placeholder="name"
                                aria-label="name"
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 me-3" controlId="wait-phone">
                            <Form.Label className='p-0'>Phone:</Form.Label>
                            <Form.Control
                                type='tel'
                                name='wait-phone'
                                placeholder="123-456-7890"
                                aria-label="phone"
                                required
                            />
                        </Form.Group>
                    </div>
                    <div>
                        <Form.Group className="mb-3" controlId="wait-size">
                            <Form.Label className='p-0'>Party Size:</Form.Label>
                            <Form.Control
                                type='number'
                                name='wait-size'
                                placeholder="size"
                                aria-label="size"
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="wait-time">
                            <Form.Label className='p-0'>Waittime:</Form.Label>
                            <Form.Control
                                type='time'
                                name='wait-time'
                                defaultValue={waittime.current}
                                aria-label="waittime"
                                onClick={handlePicker}
                                required
                            />
                        </Form.Group>
                        <div className="d-flex justify-content-end">
                            <Button variant="warning" type="submit">
                                Confirm
                            </Button>
                        </div>

                    </div>
                </Form>
            </Container>
        </>
    )
}

AddWaitlistForm.propTypes = {
    handleClose: PropTypes.func.isRequired
}

export default AddWaitlistForm;