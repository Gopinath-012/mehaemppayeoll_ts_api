import 'reflect-metadata';
import dotenv from 'dotenv';
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { RegisterRoutes } from './routes/routes'; // this will be auto-generated
import swaggerDocument from './docs/swagger.json';
import { attachControllers } from '@decorators/express';
import { SessionController } from './controllers/sessioncontroller'; // adjust path if needed

// Load .env
dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());
RegisterRoutes(app);

// Mount Swagger UI here
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
//attachControllers(app, [SessionController]);
 
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
  console.log(`📘 Swagger docs available at http://localhost:${PORT}/api-docs`);
});