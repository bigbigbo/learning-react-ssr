"use strict";

var path = require('path');

var http = require('http');

var ejs = require('ejs');

var chalk = require('chalk');

var React = require('react');

var _require = require('react-dom/server'),
    renderToString = _require.renderToString;

var Home = function Home(props) {
  var _props$count = props.count,
      count = _props$count === void 0 ? 1 : _props$count;
  return /*#__PURE__*/React.createElement("div", null, "this is build by react ssr, count is ", count, ";", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return console.log('click');
    }
  }, "\u6309\u94AE"));
};

var fetchData = function fetchData() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(999);
    }, 500);
  });
};

http.createServer(function (req, res) {
  if (req.url === '/') {
    res.writeHead(200, {
      'Content-Type': 'text/html'
    });
    fetchData().then(function (data) {
      var html = renderToString( /*#__PURE__*/React.createElement(Home, {
        count: data
      }));
      ejs.renderFile(path.resolve(__dirname, './index.ejs'), {
        title: 'react ssr',
        data: html
      }, function (err, data) {
        if (err) {
          console.log(err);
        } else {
          res.end(data);
        }
      });
    });
  }
}).listen(9981);
console.log("[".concat(new Date().toISOString(), "]"), chalk.blue("App is running: http://localhost:9981"));
