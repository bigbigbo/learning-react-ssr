import React from 'react';
import { Link } from 'react-router-dom';
const Home = (props) => {
  const { count = 1 } = props;

  return (
    <div>
      home page, count is {count} <br />
      <button onClick={() => console.log('click')}>按钮</button>
      <Link to="/about">关于页</Link>
    </div>
  );
};

export default Home;
