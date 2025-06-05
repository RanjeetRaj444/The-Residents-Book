import { useEffect, useState } from "react";
import DataCard from "../components/DataCard";
import "../styles/homePage.css";
import AddDataModal from "../components/AddDataModal";

const HomePage = () => {
  const [residentData, setResidentData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  function fetchData() {
    fetch("http://localhost:3000/residents")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setResidentData(data);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="home-page-container">
      <div className="home-page-heading">
        <h1>Welcome to the Resident Management System</h1>
      </div>
      <div className="resident-list-container">
        <h2 className="resident-list-heading">Resident List</h2>
        <div className="resident-list">
          {residentData.length > 0 ? (
            residentData.map((resident) => (
              <DataCard key={resident._id} resident={resident} />
            ))
          ) : (
            <div className="no-data">No residents found.</div>
          )}
        </div>
      </div>
      <div className="modal-container">
        <AddDataModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          fetchData={fetchData}
        />
      </div>
      <div className="footer">
        <button onClick={() => setIsOpen(true)} className="add-recident">
          Add Recident
        </button>
      </div>
    </div>
  );
};

export default HomePage;
