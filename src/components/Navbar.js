import logo from "../images/logo1.png";

function Navbar() {
    return (
        <div>
            <nav>
            <img 
            src={logo}
            alt="logo"
            className="logo-img"
            ></img>
            </nav>
        </div>
    )
}

export default Navbar;
