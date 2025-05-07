import React from "react";

const LinkButton = ({ label, url, icon }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="link-button"
  >
    <span className="icon">{icon}</span>
    <span>{label}</span>
  </a>
);

export default LinkButton;
