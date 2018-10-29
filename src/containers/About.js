import React from 'react';

const About = () => {
  return (
    <div className="container">
      <div className="row">
        <h1 className="col-12">About Can I Vote If?</h1>
        <div className="col-lg-8">
          <p>Can I Vote If? is a tool to help voters, activists, get out the vote advocates, and other individuals and organizations easily look up voting eligibility. For new American citizens, young people about to reach voting age, people with a criminal history, and others who may be uncertain whether they can register to vote, Can I Vote If? is a quick and accessible way to check.</p>
          
          <p>Can I Vote If? was initially created at <span><a href="http://codeswitchmn.com">Code Switch MN</a></span>, a civic hackathon designed to create projects with a positive community impact, organized by Blacks in Technology. The Can I Vote If? team created a prototype inspired by the idea that if it were easier for people to check their voting eligibility, more people would be empowered to vote.</p>
        </div>
        <div className="col-lg-4">Image</div>

        <div className="col-lg-8">
          <p>After Can I Vote If? was awarded first prize at Code Switch, development firm Software for Good took it on for the company's interns to bring to fruition. Can I Vote If? launched in June 2018 as a simple search tool that anyone can use to confirm voting eligibility based on age, citizenship status, and criminal history.</p>

          <p>As an open source project, Can I Vote If? is available for ongoing iteration and development. <a href="https://github.com/Can-I-Vote-If/can-i-vote-if/">Contribute here</a></p>
        </div>
        <div className="col-lg-4">Image</div>

      </div>
    </div>
  );
};

export default About;