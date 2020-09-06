const path = require('path');
const ejs = require('ejs');
const http = require('http');

http
  .createServer((req, res) => {
    if (req.url === '/') {
      res.writeHead(200, {
        'Content-Type': 'text/html',
      });
      // 渲染文件 index.ejs
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
