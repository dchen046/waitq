// import { useUser } from "../UserContext";
// import { useUserContext } from "../context/UserContext";


// components
import { useTokenStatusContext } from "../context/TokenContext";
import LoginPage from "./LoginPage";

const Home = () => {
    const isValidToken = useTokenStatusContext();
    return isValidToken ? <HomePage /> : <LoginPage />;
}

const HomePage = () => {
    return (
        <p> This is homepage </p>
    )
}

export default Home;