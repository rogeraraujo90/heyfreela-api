import 'dotenv/config';
import 'reflect-metadata';
import './infra/database/typeorm';
import './infra/container';

import express from 'express';
import routes from './infra/www/routes';

const app = express();

app.use(routes);

export default app;
