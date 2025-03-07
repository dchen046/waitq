import Container from 'react-bootstrap/esm/Container';
import Table from 'react-bootstrap/Table';
import { useWaitlistContext, useWaitlistUpdateContext } from '../context/WaitlistContext';
import { MdDelete, MdNotificationsActive } from "react-icons/md";
import { FaEdit, FaCheck } from "react-icons/fa";
import { Button } from 'react-bootstrap';

const WaitlistTable = () => {
    return (
        <Container>
            <h3>Today&apos;s Reservations</h3>
            <div className='d-flex justify-content-center'>
                <Table striped bordered hover className='' size='sm'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Size</th>
                            <th>Time</th>
                            <th className='w-25'>Notes</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {AddWaitlistRow()}
                    </tbody>
                </Table>
            </div>
        </Container>
    );
}

const AddWaitlistRow = () => {
    const waitlist = useWaitlistContext();
    const waitlistUpdater = useWaitlistUpdateContext();

    return (
        waitlist.map((entry, index) => {

            // delete button
            const handleDelete = async () => {
                const url = `http://localhost:3000/api/waitlist/delete/${entry.phone}`;
                const auth = `Bearer ${localStorage.getItem('jwt')}`
                const response = await fetch(url, {
                    method: 'DELETE',
                    headers: {
                        'authorization': auth
                    },
                })
                if (!response.ok) console.log(`Response status: ${response.status}`);
                else {
                    waitlistUpdater.removeFromWaitlist(entry.phone);
                }
            }

            // confirm button
            const handleConfirm = async () => {
                const url = `http://localhost:3000/api/waitlist/confirm/${entry.phone}`;
                const auth = `Bearer ${localStorage.getItem('jwt')}`
                const response = await fetch(url, {
                    method: 'PUT',
                    headers: {
                        'authorization': auth
                    },
                })
                if (!response.ok) console.log(`Response status: ${response.status}`);
                else {
                    waitlistUpdater.removeFromWaitlist(entry.phone);
                }
            }

            // notification button
            const handleNotification = async () => {
                console.log('noti');
                const url = `http://localhost:3000/api/waitlist/notify`;
                const auth = `Bearer ${localStorage.getItem('jwt')}`
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'authorization': auth
                    },
                })
                if (!response.ok) console.log(`Response status: ${response.status}`);
                else {
                    console.log('notified');
                }
            }

            return (
                <tr key={entry.phone}>
                    <td>{index + 1}</td>
                    <td>{entry.name}</td>
                    <td>{entry.email}</td>
                    <td>{entry.size}</td>
                    <td>{formatTime(entry.time)}</td>
                    <td>{entry.notes}</td>
                    <td>
                        <Button variant='warning' className='m-2' size='sm' onClick={handleNotification}>
                            <MdNotificationsActive />
                        </Button>

                        <Button variant='secondary' size='sm' className='m-2'>
                            <FaEdit />
                        </Button>

                        <Button variant='danger' size='sm' className='m-2' onClick={handleDelete}>
                            <MdDelete />
                        </Button>

                        <Button variant='success' size='sm' className='m-2' onClick={handleConfirm}>
                            <FaCheck />
                        </Button>
                    </td>
                </tr>
            )
        })
    );
}

const formatTime = (datetime) => {
    const localTime = utcConverter(datetime);
    const [, time, tod] = localTime.split(' ');
    const [hours, mins] = time.split(':');
    const formattedTime = `${hours}:${mins} ${tod}`;
    return formattedTime;
}

const utcConverter = (datetime) => {
    const date = new Date(datetime);
    const local = date.toLocaleString("en-US", { timeZone: 'America/New_York' });
    return local;
}

export default WaitlistTable;