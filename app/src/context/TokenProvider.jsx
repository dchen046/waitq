import PropTypes from "prop-types";
// import { useState } from "react";
import { TokenStatusContext, TokenUpdateContext } from "./TokenContext";
import { jwtDecode } from 'jwt-decode';
import { useRef } from "react";


export const UserProvider = ({ children }) => {
    const isTokenValid = (token) => {
        if (!token) {
            return false;
        }
        else {
            try {
                const decodedToken = jwtDecode(token);
                const currentTime = Date.now() / 1000;
                // console.log(decodedToken.exp);
                // console.log(currentTime);
                // console.log(decodedToken.exp - currentTime);
                return decodedToken.exp ? decodedToken.exp > currentTime : true;
            } catch (error) {
                console.error("Error decoding token: ", error);
            }
        }
    }

    let validToken = useRef(isTokenValid(localStorage.getItem('jwt')));

    // const [validToken, setValidToken] = useState(isTokenValid(localStorage.getItem('jwt')));

    function updateTokenStatus() {
        console.log('updaitng');
        const token = localStorage.getItem('jwt');
        validToken.current = isTokenValid(token);
        console.log(validToken.current);
        // setValidToken(isTokenValid(token));
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