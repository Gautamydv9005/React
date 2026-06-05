import { LOGO_URL } from "../utils/constants";

const Heading=()=>{
    return(
    <div className="header">
        <div className="logo-container"> <img  className="logo" src={LOGO_URL} alt="logo image" /> </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>contact</li>
                <li>cart</li>
            </ul>
        </div>
    </div>
    )
};

export default Heading;