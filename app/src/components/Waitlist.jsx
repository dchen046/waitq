import AddReservationModal from "./Modals/AddReservationModal"
import AddWaitlistModal from "./Modals/AddWaitlistModal";

const Waitlist = () => {
    return (
        <>
            <AddWaitlistModal />
            <AddReservationModal />
        </>
    );
}

export default Waitlist;