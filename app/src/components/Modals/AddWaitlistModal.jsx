
import { MdGroupAdd } from "react-icons/md";
import { memo, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AddWaitlistForm from "./AddWaitlistForm";

const AddWaitlistModal = memo( () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="info" onClick={handleShow} className="m-2">
                <MdGroupAdd />
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add To Waitlist</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddWaitlistForm handleClose={handleClose}/>
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
        </>
    );
});

AddWaitlistModal.displayName = 'AddWaitListModal';

export default AddWaitlistModal;