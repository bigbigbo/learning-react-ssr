import React from 'react';

const Home = (props) => {
  const { count = 1 } = props;

  return (
    <div>
      home page, count is {count} <br />
      <button onClick={() => console.log('click')}>按钮</button>
    </div>
  );
};

export default Home;
