import PropTypes from "prop-types";

const EmployerCard = ({ element, openModal }) => {
    return (
      <div className="job_seeker_card">
        <div className="detail">
          <p><span>Name:</span> {element.name}</p>
          <p><span>Email:</span> {element.email}</p>
          <p><span>Phone:</span> {element.phone}</p>
          <p><span>Address:</span> {element.address}</p>
          <p><span>CoverLetter:</span> {element.coverLetter}</p>
        </div>
        <div className="resume">
          <img
            src={element.resume.url}
            alt="resume"
            onClick={() => openModal(element.resume.url)}
          />
        </div>
      </div>
    );
  };
  
  // Prop validation for EmployerCard
  EmployerCard.propTypes = {
    element: PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
      coverLetter: PropTypes.string.isRequired,
      resume: PropTypes.shape({
        url: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    openModal: PropTypes.func.isRequired,
  };

  export default EmployerCard;