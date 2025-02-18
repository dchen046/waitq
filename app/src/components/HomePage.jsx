import { useTokenStatusContext } from "../context/TokenContext";
import BadPath from "./BadPath";
import ProfileNav from "./ProfileNav";
import Waitlist from "./Waitlist";

const Home = () => {
    const isValidToken = useTokenStatusContext();
    console.log(isValidToken.current);
    return isValidToken.current ? <HomePage /> : <BadPath />;
}

const HomePage = () => {
    return (
        <>
            <ProfileNav />
            <Waitlist />
        </>
    )
}



export default Home;