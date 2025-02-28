import Container from 'react-bootstrap/esm/Container';
import Table from 'react-bootstrap/Table';
import { useEffect } from 'react';
import { useWaitlistContext } from '../context/WaitlistContext';

const WaitlistTable = () => {
    const waitlist = useWaitlistContext();
    // const [waitlist, setWaitlist] = useState([]);
    console.log('waiter');
    console.log(waitlist);

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
                    {/* <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>2</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                    </tr> */}
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
                    <td>{entry.time}</td>
                    <td>{entry.notes}</td>
                    <td>actions</td>
                </tr>
            )
        })
    );
}

export default WaitlistTable;