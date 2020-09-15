import React from 'react';
import { Link } from 'react-router-dom';
import withSSR from '../../components/withSSR';

const About = (props) => {
  const { data = [] } = props;

  return (
    <div>
      <h1>About Page</h1>
      <p>this is build by react ssr</p>
      {data.map((item, key) => (
        <p key={key}>{item}</p>
      ))}
      <Link to="/">回到首页</Link>
    </div>
  );
};

const sleep = (t) =>
  new Promise((r) => {
    setTimeout(r, t);
  });

About.getInitialProps = async () => {
  await sleep(1000);
  return {
    data: ['2020年09月16日', '星期三', '天气晴'],
  };
};

export default withSSR(About);
