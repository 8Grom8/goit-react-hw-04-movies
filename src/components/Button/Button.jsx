import React from "react";
import PropTypes from "prop-types";

const Button = ({ btnName, onClick }) => {
  return (
    <div className="BtnContainer">
      <button type="button" className="Button" onClick={onClick}>
        {btnName}
      </button>
    </div>
  );
};

Button.propTypes = {
  btnName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
