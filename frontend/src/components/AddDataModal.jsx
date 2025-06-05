import { useState } from "react";
import "../styles/AddDataModal.css";

const AddDataModal = ({ isOpen, setIsOpen, fetchData }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    role: "",
    profilePhoto: "",
    linkedIn: "",
    twitter: "",
  });

  function handleFromData(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  function addDataToServer(e) {
    e.preventDefault();
    fetch("http://localhost:3000/residents/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        return res.json();
      })
      .then(() => {
        setIsOpen(false);
        e.target.reset();
        fetchData();
      })
      .catch((err) => {
        alert(`${err}`);
      });
  }

  return (
    <div className={`form-container ${isOpen ? "show" : ""}`}>
      <h1>Add Data</h1>
      <form action="" type="submit" className="form" onSubmit={addDataToServer}>
        <input
          className="input-fiels"
          type="text"
          name="firstName"
          placeholder="firstName"
          onChange={handleFromData}
          required
        />
        <input
          className="input-fiels"
          type="text"
          name="lastName"
          placeholder="lastName"
          onChange={handleFromData}
          required
        />
        <input
          className="input-fiels"
          type="text"
          name="profilePhoto"
          placeholder="profilePhoto"
          onChange={handleFromData}
        />
        <input
          className="input-fiels"
          type="text"
          name="role"
          placeholder="role"
          onChange={handleFromData}
          required
        />
        <input
          className="input-fiels"
          type="text"
          name="linkedIn"
          placeholder="linkedIn"
          onChange={handleFromData}
        />
        <input
          className="input-fiels"
          type="text"
          name="twitter"
          placeholder="twitter"
          onChange={handleFromData}
        />
        <button type="submit" className="from-btn">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddDataModal;
