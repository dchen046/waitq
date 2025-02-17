import PropTypes from "prop-types";
import { useState } from "react";
import { TokenStatusContext, TokenUpdateContext } from "./TokenContext";
import { jwtDecode } from 'jwt-decode';


export const UserProvider = ({ children }) => {
    const isTokenValid = (token) => {
        if (!token) {
            return false;
        }
        else {
            try {
                const decodedToken = jwtDecode(token);
                const currentTime = Date.now() / 1000;
                console.log(decodedToken.exp - currentTime);
                if (decodedToken.exp) return decodedToken.exp > currentTime;
                return true;
            } catch (error) {
                console.error("Error decoding token: ", error);
            }
        }
    }

    const [validToken, setTokenStatus] = useState(isTokenValid(localStorage.getItem('jwt')));

    const updateTokenStatus = () => {
        const token = localStorage.getItem('jwt');
        setTokenStatus(isTokenValid(token));
    }

    return (
        <TokenStatusContext.Provider value={validToken}>
            <TokenUpdateContext.Provider value={updateTokenStatus}>
                {children}
            </TokenUpdateContext.Provider>
        </TokenStatusContext.Provider>
    );
}

UserProvider.propTypes = {
    children: PropTypes.node
}