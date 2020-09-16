const path = require('path');
const http = require('http');
const ejs = require('ejs');
const chalk = require('chalk');

const React = require('react');
const { renderToString } = require('react-dom/server');

const Home = (props) => {
  const { count = 1 } = props;
  return (
    <div>
      this is build by react ssr, count is {count};
      <br />
      <button onClick={() => console.log('click')}>按钮</button>
    </div>
  );
};

const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(999);
    }, 500);
  });
};

http
  .createServer((req, res) => {
    if (req.url === '/') {
      res.writeHead(200, {
        'Content-Type': 'text/html',
      });

      fetchData().then((data) => {
        const html = renderToString(<Home count={data} />);

        ejs.renderFile(
          path.resolve(__dirname, './index.ejs'),
          {
            title: 'react ssr',
            data: html,
          },
          (err, data) => {
            if (err) {
              console.log(err);
            } else {
              res.end(data);
            }
          }
        );
      });
    }
  })
  .listen(9981);

console.log(`[${new Date().toISOString()}]`, chalk.blue(`App is running: http://localhost:9981`));
