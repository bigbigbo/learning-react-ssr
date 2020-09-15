import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Home = (props) => {
  const { count = 1 } = props;

  return (
    <div>
      <Helmet>
        <title>React SSR - 首页</title>
        <meta name="description" content="首页的描述" />
        <meta name="keywords" content="首页,React,React SSR" />
      </Helmet>
      home page, count is {count} <br />
      <button onClick={() => console.log('click')}>按钮</button>
      <Link to="/about">关于页</Link>
    </div>
  );
};

export default Home;
