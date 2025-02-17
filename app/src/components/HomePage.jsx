// import { useUser } from "../UserContext";
// import { useUserContext } from "../context/UserContext";


// components
import { useTokenStatusContext } from "../context/TokenContext";
import LoginPage from "./LoginPage";

const Home = () => {
    const isValidToken = useTokenStatusContext();
    if (isValidToken) {
        return <HomePage />
    } else {
        return <LoginPage />
    }
}

const HomePage = () => {
    return (
        <p> This is homepage </p>
    )
}

    // const [user, updateUser] = useState({
    //     isLoggedIn: false,
    // });

    // return (user.isLoggedIn ?
    //     <LoginPage /> :
    //     <>
    //         <UserContext.Provider value={user}>
    //             <div>
    //                 <h1>Hello from the main page of the app!</h1>
    //                 <p>Here are some examples of links to other pages</p>
    //                 <nav>
    //                     <ul>
    //                         <li>
    //                             <a href="profile">Profile page</a>
    //                         </li>
    //                     </ul>
    //                 </nav>
    //             </div>
    //         </UserContext.Provider>
    //     </>
    // )

    // const user = useUser();

    // console.log(user);

    // if (!true) {
    //     return (
    //         <LoginPage />
    //     )
    // } else {
    //     return (
    //         <div>
    //             <h1>Hello from the main page of the app!</h1>
    //             <p>Here are some examples of links to other pages</p>
    //             <nav>
    //                 <ul>
    //                     <li>
    //                         <a href="profile">Profile page</a>
    //                     </li>
    //                 </ul>
    //             </nav>
    //         </div>
    //     );
    // }

    // return (
    // <div>
    //     <h1>Hello from the main page of the app!</h1>
    //     <p>Here are some examples of links to other pages</p>
    //     <nav>
    //         <ul>
    //             <li>
    //                 <a href="profile">Profile page</a>
    //             </li>
    //         </ul>
    //     </nav>
    // </div>
    // );


export default Home;