import React from 'react';

const Footer = () => {
  return (
    <footer className="container footer-wrap">
      <p className="text-center">
        <strong>
          Find out how to register to vote in your state by following the link
          below.
        </strong>

        <br />
        
        <a
          href="https://vote.gov/"
          target="_blank"
          rel="noopener noreferrer">
          Register at vote.gov
        </a>
      </p>
    </footer>
  );
};

export default Footer;
