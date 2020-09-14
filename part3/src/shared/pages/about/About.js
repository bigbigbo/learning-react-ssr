import React from 'react';
import { Link } from 'react-router-dom';

const About = (props) => {
  return (
    <div>
      <h1>About Page</h1>
      <p>this is build by react ssr</p>
      <Link to="/">回到首页</Link>
    </div>
  );
};

export default About;
