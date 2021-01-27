const eta = require('eta')
const arc = require('@architect/functions');

exports.handler = async function http (req) {
  const data = { answer: 43, css: arc.static('./compiled.css') };
  eta.configure({
    views: __dirname
  });
  return {
    statusCode: 200,
    headers: {
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
      'content-type': 'text/html; charset=utf8'
    },
    body: await eta.renderFile('index', data)
  }
}
