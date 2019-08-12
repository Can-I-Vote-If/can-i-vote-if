import React from 'react';
import Form from "../components/Form";

const Home = () => {
  return (
    <div className="container">
      <p>
        <em>Can I Vote If?</em> is here to assist people with questions about whether or not they are able to register to vote in their state. The information below is compiled from various reputable websites, including state's government websites, and places like Vote.org.
        <br />
        No information submitted in the form below will save anywhere, and the only tracking on this website is Google Analytics so that we can get information about general website traffic.
        <br />
        This project is open source and you can view the source code <a href="https://github.com/Can-I-Vote-If/can-i-vote-if" target="_blank" rel="noopener noreferrer">here</a>. You can also submit any errors you see <a href="https://github.com/Can-I-Vote-If/can-i-vote-if/issues/new" target="_blank" rel="noopener noreferrer">here</a>.
      </p>
      <Form/>
    </div>
  );
};

export default Home;