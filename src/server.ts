import express from 'express';
const app = express();
import './Database/createConnectio'
import routes from './routes';
import path from 'path'
import errorHandler from './error/handler';
import cors from 'cors'

app.use(cors());
app.use(express.json());
app.use(routes)
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
app.use(errorHandler)

app.listen(3333);

