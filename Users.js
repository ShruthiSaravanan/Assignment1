const fetch = require('node-fetch');
let gender = 'male';
let searchCity = 'Louisville'; 

fetch('https://dummyjson.com/users')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); 
  })
  .then(data => {
       
    let filteredData;
    if(data.users){
     const userList = data.users;
     filteredData = userList.filter((users) => {
            return users.gender === gender && users.address.city === searchCity;
          });
    }
      
    filteredData.sort((a, b) => a.firstName.localeCompare(b.firstName));
    console.log(filteredData);

  });


