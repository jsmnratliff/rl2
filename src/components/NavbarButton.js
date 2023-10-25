import './Navbar.css';

const NavbarButton = ({ label, onClick }) => {
    return (
      <button className="navbar-button" onClick={onClick}>
        {label}
      </button>
    );
  };
  
  export default NavbarButton;