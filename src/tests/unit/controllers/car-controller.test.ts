import { expect } from 'chai';
import * as sinon from 'sinon';
import { Request, Response } from 'express';
import CarController from '../../../controllers/CarController';
import CarService from '../../../services/CarService';
import CarModel from '../../../models/CarModel';
import { carMock, carMockAll, carMockWithId } from '../../mocks/carMock';

describe('verifica rota /cars', () => {
  const car = new CarModel();
  const carService = new CarService(car);
  const carController = new CarController(carService);
  const req = {} as Request;
  const res = {} as Response;

  before(() => {
    sinon.stub(carService, 'create').resolves(carMockWithId);
    sinon.stub(carService, 'read').resolves(carMockAll);
    sinon.stub(carService, 'readOne').resolves(carMockWithId);

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  });

  after(() => {
    sinon.restore();
  });

  describe('vetifica método POST/', () => {
    it('em caso de sucesso', async () => {
      req.body = carMock;
      await carController.create(req, res);
      expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(carMockWithId)).to.be.true;
    });
  });

  describe('verifica método GET/', () => {
    it('em caso de sucesso', async () => {
      await carController.read(req, res);
      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(carMockAll)).to.be.true;
    });
  });

  describe('verifica método GET/:id', () => {
    it('em caso de sucesso', async () => {
      req.params = { id: carMockWithId._id };
      await carController.read(req, res);
      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(carMockWithId)).to.be.true;
    });
  });
})