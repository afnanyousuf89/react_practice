import logo from './images/logo.png'
import './css/Header.css'

function Header() {
    return (
        <header>
            <img className="logo" src={logo} />
        </header>
    )
}

export default Header;