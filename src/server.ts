import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  return response.send('Faaaaaaaala dev');
});

app.listen(3333, () => {
  console.log('Server running on port 3333...');
})