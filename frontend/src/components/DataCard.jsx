import "../styles/dataCard.css";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

const DataCard = ({ resident }) => {
  return (
    <div key={resident._id} className="resident-card">
      <img
        src={
          resident.profilePhoto === ""
            ? "https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small_2x/default-avatar-profile-icon-of-social-media-user-vector.jpg"
            : resident.profilePhoto
        }
        alt="resident"
      />
      <h3>
        {resident.firstName} {resident.lastName}
      </h3>
      <p>
        <i>
          <strong style={{ fontWeight: "bolder", color: "black" }}>Role</strong>
        </i>
        : {resident.role}
      </p>
      <div className="resident-socials">
        <a
          href={resident.linkedIn || "#"}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="social-link"
          tabIndex={resident.linkedIn === "" ? -1 : 0}
        >
          <button
            disabled={resident.linkedIn === ""}
            className={`linkedIn social-btn ${
              resident.linkedIn === "" ? "disable" : ""
            }`}
          >
            <FaLinkedin size={22} />
          </button>
        </a>
        <a
          href={resident.twitter || "#"}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="social-link"
          tabIndex={resident.twitter === "" ? -1 : 0}
        >
          <button
            disabled={resident.twitter === ""}
            className={`twitter social-btn ${
              resident.twitter === "" ? "disable" : ""
            }`}
          >
            <FaTwitter size={22} />
          </button>
        </a>
      </div>
    </div>
  );
};

export default DataCard;
