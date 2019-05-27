var request = require('request');

request({
  method: 'GET',
  url: `https://api.ritekit.com/v1/stats/hashtag-suggestions?text=${home}&client_id=${clientID}`,
  headers: {
    'Content-Type': 'text/html; charset=utf-8'
  }}, function (error, response, body) {
  console.log('Status:', response.statusCode);
  console.log('Headers:', JSON.stringify(response.headers));
  console.log('Response:', body);
});
