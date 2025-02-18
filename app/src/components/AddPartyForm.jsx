import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useRef } from 'react';
import Container from 'react-bootstrap/esm/Container';

// year-month-dayThr:mins
const getTimeFormat = (date) => {
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    const year = date.getFullYear();
    const hour = date.getHours();
    const min = date.getMinutes();

    return `${year}-${month}-${day}T${hour}:${min}`;
}

const AddPartyForm = ({ handleClose }) => {
    const date = useRef(new Date());
    console.log(date.current);
    const today = getTimeFormat(date.current);
    console.log(today);

    const handlePicker = (e) => {
        e.currentTarget.showPicker();
        console.log(e.currentTarget.value)

        //2025-02-18T17:59
    }

    return (
        <>
            <Container>
                <Form className='d-flex'>
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
                        <div className="d-flex justify-content-end">
                            <Button variant="warning" type="submit" className="justify-content-end">
                                Confirm
                            </Button>
                        </div>
                        
                    </div>
                </Form>
            </Container>
        </>
    )
}

export default AddPartyForm;