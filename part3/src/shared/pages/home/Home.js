import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import withSSR from '../../components/withSSR';

const Home = (props) => {
  const { count = 1, data = [] } = props;

  return (
    <div>
      <Helmet>
        <title>React SSR - 首页</title>
        <meta name="description" content="首页的描述" />
        <meta name="keywords" content="首页,React,React SSR" />
      </Helmet>
      home page, count is {count} <br />
      <button onClick={() => console.log('click')}>按钮</button>
      {data.map((item, key) => (
        <p key={key}>{item}</p>
      ))}
      <Link to="/about">关于页</Link>
    </div>
  );
};

const sleep = (t) =>
  new Promise((r) => {
    setTimeout(r, t);
  });

Home.getInitialProps = async () => {
  await sleep(1000);
  return {
    data: ['测试数据1', '测试数据2', '测试数据3'],
  };
};

export default withSSR(Home);
