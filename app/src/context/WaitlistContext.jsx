import { createContext, useContext } from "react"


export const WaitlistContext = createContext();
export const WaitlistUpdateContext = createContext();

export const useWaitlistContext = () => {
    return useContext(WaitlistContext);
}

export const useWaitlistUpdateContext = () => {
    return useContext(WaitlistUpdateContext)
}
