const axios = require('axios');

const apiKey = 'zRR9hynVIzfP9pR7j/u7ow==a4xV7oWtyd7Wdz3B';
const query = 'pizza Dough';

axios.get(`https://api.api-ninjas.com/v1/recipe?query=${encodeURIComponent(query)}`, {
  headers: {
    'X-Api-Key': apiKey,
  },
})
  .then((response) => {
    console.log(response.data[0].instructions);
  })
  .catch((error) => {
    console.error('Request failed:', error);
  });
