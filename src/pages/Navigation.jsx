import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import '../Navigation.css'

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<h3>LOGO</h3>
			<nav ref={navRef}>
				<a href="/#">
          <Link to='/' style={{textDecoration:"none"}} >Home</Link>
        </a>
				<a href="/#">
          <Link to='/about' style={{textDecoration:"none"}} >About</Link>
        </a>
				<a href="/#">
          <Link to='/library' style={{textDecoration:"none"}} >Library</Link>
        </a>
				<a href="/#">
          <Link to='/' style={{textDecoration:"none"}} >Home</Link>
        </a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;