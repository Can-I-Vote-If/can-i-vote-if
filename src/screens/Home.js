import React from 'react';
import Form from "../components/Form";

const Home = () => {
  return (
    <div className="container">
      <p className="text-center">
        <em>Can I Vote If?</em> is here to assist people with questions about whether or not they are able to vote in their state. The information below is pulled from each state's government website. This project is open source and you can contribute here. 
      </p>
      <Form/>
    </div>
  );
};

export default Home;