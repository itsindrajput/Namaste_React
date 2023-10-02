import Logo from "../public/cover.png";

const Title=()=>(
    < a href='/'>
    <img className="logo" src={Logo} alt="Taste Me Best" />
    </a>
);

const Header=()=>{
    // Earlier Header was HeaderComponent
    // return is optional here, but it's good practice to have one
    return (
        <div id="heading">
        <Title />
        <div className="nav-items">
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Support</li>
            <li>Cart</li>
        </ul>
        </div>
        </div>
    );
};

export default Header;