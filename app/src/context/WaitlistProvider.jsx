import PropTypes from "prop-types"
import { WaitlistContext, WaitlistUpdateContext } from "./WaitlistContext"
import { useState, useEffect } from "react"

export const WaitlistProvider = ({ children }) => {
    const [waitlist, setWaitlist] = useState([])

    const updateWaitlist = async () => {
        const url = 'http://localhost:3000/api/waitlist/today'
        const auth = `Bearer ${localStorage.getItem('jwt')}`
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'authorization': auth
            }
        });
        if (!response.ok) console.log('uh ohh');
        const result = await response.json();
        setWaitlist(result.reservations);
    }

    const removeFromWaitlist = (phone) => {
        setWaitlist(waitlist.filter(item => item.phone != phone));
    }

    useEffect(() => {
        console.log('effect');
        updateWaitlist();
    }, []);

    return (
        <WaitlistContext.Provider value={waitlist}>
            <WaitlistUpdateContext.Provider value={removeFromWaitlist} >
                {children}
            </WaitlistUpdateContext.Provider>
        </WaitlistContext.Provider>
    )
}

WaitlistProvider.propTypes = {
    children: PropTypes.node
}