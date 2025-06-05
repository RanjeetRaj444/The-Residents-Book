import { useEffect, useState } from "react";
import DataCard from "../components/DataCard";
import "../styles/homePage.css";
import AddDataModal from "../components/AddDataModal";

const HomePage = ({ isOpen, setIsOpen }) => {
  const [residentData, setResidentData] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  function fetchData() {
    fetch("https://the-residents-book-fbfv.onrender.com/residents")
      .then((res) => res.json())
      .then((data) => {
        setResidentData(data);
        setIsLoading(false);
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
      {isLoading ? (
        <div>Please wait Loading...</div>
      ) : (
        
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
      )}
      <AddDataModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        fetchData={fetchData}
      />
    </div>
  );
};

export default HomePage;
