import { WaitlistProvider } from "../context/WaitlistProvider";
import AddReservationModal from "./Modals/AddReservationModal"
import AddWaitlistModal from "./Modals/AddWaitlistModal";
import WaitlistTable from "./WaitlistTable";

const Waitlist = () => {
    const user = JSON.parse(localStorage.getItem('current-business'));
    return (
        <>
            <WaitlistProvider>
                <h1>Welcome Back {user.name}</h1>
                <AddWaitlistModal />
                <AddReservationModal />
                <WaitlistTable />
            </WaitlistProvider>
        </>
    );
}

export default Waitlist;