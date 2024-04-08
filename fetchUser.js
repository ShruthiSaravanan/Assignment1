const http = require('http');
const url = require('url');
const fetch = require('node-fetch');

const PORT = 8000;

const server = http.createServer((req, res) => {
      const { pathname, query } = url.parse(req.url, true);

  if (req.method === 'GET' && pathname === '/filtered-users') {
    fetchUserData(query, res);
  } 
  else {
    res.statusCode = 404;
    res.end('Not Found');
       }
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

function fetchUserData(query, res) {
  let gender = query.gender || 'male';
  let searchCity = query.city || 'Louisville';

  fetch('https://dummyjson.com/users')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      let filteredData = [];

      if (data.users) {
        const userList = data.users;
        filteredData = userList.filter(user => {
          return user.gender === gender && user.address.city === searchCity;
        });
      }

      filteredData.sort((a, b) => a.firstName.localeCompare(b.firstName));
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(filteredData));
    })
}
