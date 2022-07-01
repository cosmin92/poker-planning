import Logged from "./Logged";
import Login from "./Login";
import Register from "./Register";

const NavbarLogStatus: React.FC = () => {
    const token = sessionStorage.getItem('token');

    return (
        <>
            {token !== null && <Logged />}
            {token === null && (
                <>
                    <Register />
                    <Login />
                </>
            )}
        </>
    )
}

export default NavbarLogStatus;