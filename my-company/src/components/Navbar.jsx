import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav style={{
      backgroundColor: '#004466',
      padding: '10px',
      textAlign: 'center'
    }}>
      <Link to="/" style={{ color: 'white', margin: '0 15px', textDecoration: 'none' }}>Home</Link>
      <Link to="/about" style={{ color: 'white', margin: '0 15px', textDecoration: 'none' }}>About</Link>
      <Link to="/services" style={{ color: 'white', margin: '0 15px', textDecoration: 'none' }}>Services</Link>
      <Link to="/contact" style={{ color: 'white', margin: '0 15px', textDecoration: 'none' }}>Contact</Link>
    </nav>
  );
}
export default Navbar;
 Footer.jsx

function Footer() {
  return (
    <footer style={{
      backgroundColor: '#004466',
      color: 'white',
      textAlign: 'center',
      padding: '10px',
      marginTop: '20px'
    }}>
      <p>© 2025 My Company. All rights reserved.</p>
    </footer>
  );
}
export default Footer;
App.jsx

import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#004466",
        padding: "10px",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Link
        to="/"
        style={{
          color: "white",
          margin: "0 15px",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        Home
      </Link>
      <Link
        to="/about"
        style={{
          color: "white",
          margin: "0 15px",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        About
      </Link>
      <Link
        to="/services"
        style={{
          color: "white",
          margin: "0 15px",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        Services
      </Link>
      <Link
        to="/contact"
        style={{
          color: "white",
          margin: "0 15px",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        Contact
      </Link>
    </nav>
  );
}

export default Navbar;