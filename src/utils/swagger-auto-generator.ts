require('dotenv').config(); // Load .env

const swaggerAutogen = require('swagger-autogen')();

const port = process.env.PORT || '3000';
const host = `localhost:${port}`;

const doc = {
  info: {
    title: process.env.API_NAME || 'API Docs',
    description: process.env.API_DESC || 'API Documentation',
    version: process.env.API_VERSION || '1.0.0',
  },
  host: host,
  basePath: '/',
  schemes: ['http'],
  consumes: ['application/json'],
  produces: ['application/json'],
};

const outputFile = './src/docs/swagger-output.json';
const endpointsFiles = ['./src/controllers/*.ts'];

swaggerAutogen(outputFile, endpointsFiles, doc);