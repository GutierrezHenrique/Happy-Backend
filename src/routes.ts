

import { Router } from 'express';
import multer from 'multer';
import OrphanagesController from './Controllers/OrphanagesController';
import UploadConfig from './config/upload'
import 'express-async-errors'

const routes = Router();
const upload = multer(UploadConfig);

routes.post('/orphanages', upload.array('images'), OrphanagesController.create);
routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:id', OrphanagesController.show);


export default routes;