// import * as express from 'express';
import apiRouter from './routes';
const express = require ('express')
const app = express();

app.use(express.static('public'));
app.use(apiRouter);

const port = process.env.PORT || 4001;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
