import "../styles/navbar.css";
const Navbar = ({ setIsOpen }) => {
  return (
    <div className="navbar">
      <div className="home-page-heading">
        <h1>Resident Management System</h1>
      </div>
      <div className="nav-btn-section">
        <button onClick={() => setIsOpen(true)} className="add-recident">
          Add Recident
        </button>
      </div>
    </div>
  );
};

export default Navbar;
