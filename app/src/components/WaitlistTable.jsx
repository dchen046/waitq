import Container from 'react-bootstrap/esm/Container';
import Table from 'react-bootstrap/Table';
import { useWaitlistContext } from '../context/WaitlistContext';
import { MdDelete } from "react-icons/md";
import { FaEdit, FaCheck } from "react-icons/fa";
import { Button } from 'react-bootstrap';




const WaitlistTable = () => {
    return (
        <Container>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Size</th>
                        <th>Time</th>
                        <th>Notes</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {AddWaitlistRow()}
                </tbody>
            </Table>
        </Container>
    );
}

const AddWaitlistRow = () => {
    const waitlist = useWaitlistContext();

    return (
        waitlist.map((entry, index) => {
            return (
                <tr key={entry.phone}>
                    <td>{index + 1}</td>
                    <td>{entry.name}</td>
                    <td>{entry.phone}</td>
                    <td>{entry.size}</td>
                    <td>{formatTime(entry.time)}</td>
                    <td>{entry.notes}</td>
                    <td>
                        <Button variant='danger m-2' size='sm'>
                            <MdDelete />
                        </Button>

                        <Button variant='warning m-2' size='sm'>
                            <FaEdit />
                        </Button>

                        <Button variant='success m-2' size='sm'>
                            <FaCheck />
                        </Button>
                    </td>
                </tr>
            )
        })
    );
}

const formatTime = (datetime) => {
    const [date, time] = datetime.split('T');
    const [hours, mins] = time.split(':');
    const formattedTime = `${date} ${hours}:${mins}`;
    return formattedTime;
}

export default WaitlistTable;