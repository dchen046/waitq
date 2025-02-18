import { useTokenStatusContext } from "../context/TokenContext";
import BadPath from "./BadPath";
import ProfileNav from "./ProfileNav";
// import Waitlist from "./Waitlist";
import { Outlet } from "react-router-dom";

const Home = () => {
    const isValidToken = useTokenStatusContext();
    console.log(isValidToken.current);
    return isValidToken.current ? <HomePage /> : <BadPath />;
}

const HomePage = () => {
    return (
        <div>
            <ProfileNav />
            <Outlet />
        </div>
    )
}



export default Home;