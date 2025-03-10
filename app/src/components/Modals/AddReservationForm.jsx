import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useRef } from 'react';
import Container from 'react-bootstrap/esm/Container';
import PropTypes from 'prop-types';
import { useWaitlistUpdateContext } from '../../context/WaitlistContext';

// year-month-dayThr:mins
const getTimeFormat = (date) => {
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    const year = date.getFullYear();
    const hour = date.getHours();
    const min = date.getMinutes();

    return `${year}-${month}-${day}T${hour}:${min}`;
}

const AddReservationForm = ({ handleClose }) => {
    const date = useRef(new Date());
    const today = getTimeFormat(date.current);
    const waitlistUpdater = useWaitlistUpdateContext();

    const handlePicker = (e) => {
        e.currentTarget.showPicker();
        //2025-02-18T17:59
    }

    const handleResAdd = async (e) => {
        e.preventDefault();
        handleClose();

        e.preventDefault();
        const formData = new FormData(e.target);
        const url = `http://localhost:3000/api/waitlist/add-reservation`;
        const auth = `Bearer ${localStorage.getItem('jwt')}`
        const current = JSON.parse(localStorage.getItem('current-business'));

        const body = JSON.stringify({
            name: formData.get('res-name'),
            size: formData.get('res-size'),
            phone: formData.get('res-phone'),
            time: formData.get('res-date'),
            email: formData.get('res-email'),
            notes: formData.get('res-notes'),
            b_name: current.name
        });
        console.log(body);

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
            waitlistUpdater.updateWaitlist();
            handleClose();
        }
    }

    return (
        <>
            <Container>
                <Form className='d-flex' onSubmit={handleResAdd}>
                    <div>
                        <Form.Group className="mb-3 me-3" controlId="res-name">
                            <Form.Label className='p-0'>Name:</Form.Label>
                            <Form.Control
                                type='text'
                                name='res-name'
                                placeholder="name"
                                aria-label="name"
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 me-3" controlId="res-phone">
                            <Form.Label className='p-0'>Phone:</Form.Label>
                            <Form.Control
                                type='tel'
                                name='res-phone'
                                placeholder="123-456-7890"
                                aria-label="phone"
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 me-3" controlId="res-email">
                            <Form.Label className='p-0'>Email:</Form.Label>
                            <Form.Control
                                type='email'
                                name='res-email'
                                placeholder="email"
                                aria-label="email"
                            />
                        </Form.Group>
                    </div>
                    <div>
                        <Form.Group className="mb-3" controlId="res-size">
                            <Form.Label className='p-0'>Party Size:</Form.Label>
                            <Form.Control
                                type='number'
                                name='res-size'
                                placeholder="size"
                                aria-label="size"
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="res-date">
                            <Form.Label className='p-0'>Date:</Form.Label>
                            <Form.Control
                                type='datetime-local'
                                name='res-date'
                                defaultValue={today}
                                aria-label="date"
                                onClick={handlePicker}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="res-notes">
                            <Form.Label className='p-0'>Notes:</Form.Label>
                            <Form.Control
                                type='text'
                                name='res-notes'
                                placeholder="notes"
                                aria-label="notes"
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

AddReservationForm.propTypes = {
    handleClose: PropTypes.func.isRequired
}

export default AddReservationForm;