import { useState } from "react";
import "../styles/AddDataModal.css";
import { RxCross1 } from "react-icons/rx";
import Toast from "./Toast";

const AddDataModal = ({ isOpen, setIsOpen, fetchData }) => {
  const [toast, setToast] = useState(null);

  const showToast = (msg, type) => {
    setToast({ message: msg, type });
  };

  const closeToast = () => {
    setToast(null);
  };
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
    fetch("https://the-residents-book-fbfv.onrender.com/residents/post", {
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
        showToast("Success Toast!", "success");
        setIsOpen(false);
        e.target.reset();
        fetchData();
      })
      .catch((err) => {
        showToast("Error Toast!", "error");
        // alert(`${err}`);
      });
  }

  return (
    <>
      <div
        className={`modal-overlay${isOpen ? " show" : ""}`}
        onClick={() => setIsOpen(false)}
      />
      <div className={`form-container${isOpen ? " show" : ""}`}>
        <div className="top-conatiner-form">
          <h1>Add Data</h1>
          <button onClick={() => setIsOpen(false)} className="social-btn">
            <RxCross1 />
          </button>
        </div>
        <form
          action=""
          type="submit"
          className="form"
          onSubmit={addDataToServer}
        >
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
      {toast && (
        <Toast message={toast.message} type={toast.type} onClose={closeToast} />
      )}
    </>
  );
};

export default AddDataModal;
