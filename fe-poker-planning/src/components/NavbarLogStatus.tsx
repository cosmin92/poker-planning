import Logged from "./Logged";
import Login from "./Login";
import Register from "./Register";

const NavbarLogStatus = () => {
    // this is a moc, it will be changed with the access token
    const test = 'a';

    return (
        <>
            {/* {test === 'a' && <Logged />}
            {test !== 'a' && (
                <>
                    <Register />
                    <Login />
                </>
            )} */}
            <Register />
            <Login />
        </>
    )
}

export default NavbarLogStatus;