import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useRef } from 'react';
import Container from 'react-bootstrap/esm/Container';

// hr:mins
// default 15 mins from current time
const getWaittime = (mins = 15) => {
    const date = new Date(new Date().getTime() + (mins * 60000));
    const hour = date.getHours();
    const min = date.getMinutes();

    return `${hour}:${min}`;
}

const AddWaitlistForm = ({ handleClose }) => {
    const waittime = useRef(getWaittime());

    const handlePicker = (e) => {
        e.currentTarget.showPicker();
        console.log(e.currentTarget.value);
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
                        <Form.Group className="mb-3" controlId="res-waittime">
                            <Form.Label className='p-0'>Waittime:</Form.Label>
                            <Form.Control
                                type='time'
                                name='res-waittime'
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

export default AddWaitlistForm;