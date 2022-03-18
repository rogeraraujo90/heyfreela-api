import 'dotenv/config';
import 'reflect-metadata';
import './infra/database/typeorm';
import './infra/container';

import express from 'express';
import routes from './infra/www/routes';

const app = express();
const port = process.env.API_PORT;

app.use(routes);

app.listen(port, () => {
  console.log('🚀', `Server started on port ${port}`);
});
