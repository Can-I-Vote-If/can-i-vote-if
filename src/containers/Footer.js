import React from 'react';

const Footer = () => {
  return (
    <div className="row footer-wrap">
      <p className="col-sm-12 text-center">
        <strong>
          Find out how to register to vote in your state by following the link
          below.
        </strong>
      </p>
      <a
        href="https://vote.gov/"
        className="footer col-sm-12 parentButton"
        target="_blank"
        rel="noopener noreferrer">
        Register at vote.gov
      </a>
    </div>
  );
};

export default Footer;
