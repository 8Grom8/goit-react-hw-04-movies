import React from "react";
import css from "./Sections.module.css";
import PropTypes from "prop-types";

const Section = ({ children, title }) => {
  return (
    <section>
      <div className={css.container}>
        <h2>{title.toUpperCase()}</h2>
        {children}
      </div>
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
