import { Router } from 'express';
import CarController from '../controllers/CarController';
import validateId from '../middlewares/validateId';
import CarModel from '../models/CarModel';
import CarService from '../services/CarService';

const carRouter = Router();

const car = new CarModel();
const carService = new CarService(car);
const carController = new CarController(carService);

carRouter.post('/cars', (req, res) => carController.create(req, res));
carRouter.get('/cars', (req, res) => carController.read(req, res));
carRouter.get(
  '/cars/:id', 
  validateId,
  (req, res) => carController.readOne(req, res),
);

export default carRouter;