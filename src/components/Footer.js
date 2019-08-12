import React from 'react';

const Footer = () => {
  let year = new Date().getFullYear();
  // year = year;

  return (
    <footer className="container footer-wrap">
      <div className="row justify-content-between align-items-center py-3 py-md-0">
        <p className="col-md-4">
          <strong>Copyright {` `} { year.toString() }</strong>
        </p>

        <div className="col-md-4 text-md-right">
          <a
            href="https://vote.gov/"
            className="btn btn-outline-primary"
            target="_blank"
            rel="noopener noreferrer">
            Register at vote.gov
          </a>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
