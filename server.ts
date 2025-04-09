import express, { Application } from 'express';
import connectDB from './config';
import userRoutes from './routes/users';
import bookRoutes from './routes/books';

const app: Application = express();
const port: number = 3000;

app.use(express.json());
connectDB();

app.use('/users', userRoutes);
app.use('/books', bookRoutes);

app.listen(port, () => {
  console.log('Server is running on port number' , port);
});
