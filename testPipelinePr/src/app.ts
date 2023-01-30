"use strict";

import express from 'express';
import {itemsRouter} from './items/items.router';

const app = express();
const port = 7001;

app.use("/items", itemsRouter);

// routes
app.get('/', (req, res) => {
  res.send("What's up doc ?!");
});

// start the server
app.listen(port, () => {
  console.log(`Express is listening at http://localhost:${port}`);
});

