import 'dotenv/config';
import express from 'express';

const app = express();
const port = process.env.API_PORT;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log('🚀', `Server started on port ${port}`);
});
