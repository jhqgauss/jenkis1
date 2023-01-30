
import { matchers } from 'jest-json-schema';
import request from 'supertest';
import express from 'express';
import {itemsRouter} from '../src/items/items.router';


expect.extend(matchers);

const app = express();
app.use("/items", itemsRouter);

it('responds to /:id', async () => {
  const schema = {
    properties: {
        id: { type: 'integer' }
    },
    required: ['id'],
};
  const res = await request(app).get('/items/1');
  expect(res.statusCode).toBe(200);
  expect(res.body).toMatchSchema(schema);
});

it('responds to /', async () => {
  const res = await request(app).get('/items');
  expect(res.statusCode).toBe(200);
});