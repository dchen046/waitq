import { createContext, useContext } from "react"


export const TokenStatusContext = createContext();
export const TokenUpdateContext = createContext();

export const useTokenStatusContext = () => {
    return useContext(TokenStatusContext);
}

export const useTokenUpdateContext = () => {
    return useContext(TokenUpdateContext)
}
