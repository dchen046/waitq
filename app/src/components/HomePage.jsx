import { useTokenStatusContext } from "../context/TokenContext";
import LoginPage from "./LoginPage";
import ProfileNav from "./ProfileNav";
import Waitlist from "./Waitlist";

const Home = () => {
    const isValidToken = useTokenStatusContext();
    console.log(isValidToken);
    return isValidToken ? <HomePage /> : <LoginPage />;
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