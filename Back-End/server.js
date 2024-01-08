import express from 'express';
import dotenv from 'dotenv';
import productRoute from './routes/productRoute.js';
import authRoutes from './routes/authRoutes.js';

dotenv.config();

const app = express();

app.use(express.json());

app.use('/products', productRoute);
app.use('/auth', authRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});