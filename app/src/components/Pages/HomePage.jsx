import { useTokenStatusContext, useTokenUpdateContext } from "../../context/TokenContext";
import BadPath from "./BadPath";
import ProfileNav from "../ProfileNav";
// import Waitlist from "./Waitlist";
import { Outlet } from "react-router-dom";

const Home = () => {
    const updateTokenStatus = useTokenUpdateContext();
    updateTokenStatus();

    const isValidToken = useTokenStatusContext();
    console.log('time: ' + isValidToken.current);
    return isValidToken.current ? <HomePage /> : <BadPath />;
}

const HomePage = () => {

    const user = JSON.parse(localStorage.getItem('current-business'));
    return (
        <div>
            <ProfileNav />
            <h1>Welcome Back {user.name}</h1>
            <Outlet />
        </div>
    )
}



export default Home;