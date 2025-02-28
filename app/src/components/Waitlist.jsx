import { WaitlistProvider } from "../context/WaitlistProvider";
import AddReservationModal from "./Modals/AddReservationModal"
import AddWaitlistModal from "./Modals/AddWaitlistModal";
import WaitlistTable from "./WaitlistTable";

const Waitlist = () => {
    return (
        <>
            <WaitlistProvider>
                <AddWaitlistModal />
                <AddReservationModal />
                <WaitlistTable />
            </WaitlistProvider>
        </>
    );
}

export default Waitlist;