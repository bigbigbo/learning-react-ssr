const path = require('path');
const ejs = require('ejs');
const http = require('http');
const chalk = require('chalk');

http
  .createServer((req, res) => {
    if (req.url === '/') {
      res.writeHead(200, {
        'Content-Type': 'text/html',
      });

      ejs.renderFile(
        path.resolve(__dirname, './index.ejs'),
        {
          title: 'pure ssr',
          data: '首页',
        },
        (err, data) => {
          if (err) {
            console.log(err);
          } else {
            res.end(data);
          }
        }
      );
    }
  })
  .listen(9981);

console.log(`[${new Date().toISOString()}]`, chalk.blue(`App is running: http://localhost:9981`));
