import PropTypes from "prop-types";

const ResumeModal = ({ imageUrl, onClose }) => {
  return (
    <div className="resume-modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <img src={imageUrl} alt="resume" />
      </div>
    </div>
  );
};

export default ResumeModal;

ResumeModal.propTypes = {
  imageUrl: PropTypes.string.isRequired, // imageUrl should be a string and required
  onClose: PropTypes.func.isRequired,    // onClose should be a function and required
};
