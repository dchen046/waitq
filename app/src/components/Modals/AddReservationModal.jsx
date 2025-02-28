
import { memo, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AddReservationForm from "./AddReservationForm";
import { HiUserGroup } from "react-icons/hi";


const AddReservationModal = memo(() => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="success" onClick={handleShow} className='m-2'>
                <HiUserGroup />
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create Reservation</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddReservationForm handleClose={handleClose}/>
                </Modal.Body>
                <Modal.Footer>
                    {/* <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button> */}
                </Modal.Footer>
            </Modal>
        </>
    );
})

AddReservationModal.displayName = 'AddReservationModal';

export default AddReservationModal;