import { expect } from 'chai';
import * as sinon from 'sinon';
import { ZodError } from 'zod';
import { ErrorTypes } from '../../../errors/catalog';
import CarService from '../../../services/CarService';
import CarModel from '../../../models/CarModel';
import { carMock, carMockAll, carMockWithId } from '../../mocks/carMock';

describe('CarService', () => {
  const car = new CarModel();
  const carService = new CarService(car);

  before(() => {
    sinon.stub(car, 'create').resolves(carMockWithId);
    sinon.stub(car, 'read')
      .onCall(0).resolves(carMockAll)
      .onCall(1).resolves();
    sinon.stub(car, 'readOne')
      .onCall(0).resolves(carMockWithId)
      .onCall(1).resolves(null)
      .onCall(2).resolves(carMockWithId);
  });

  after(() => {
    sinon.restore()
  });

  describe('verifica método create', () => {
    it('em caso de sucesso', async() => {
      const newCar = await carService.create(carMock);
      expect(newCar).to.be.deep.equal(carMockWithId);
    });

    it('em caso de falha', async() => {
      try {
        await carService.create({} as any);
      } catch (error) {
        expect(error).to.be.instanceOf(ZodError);
      }
    })
  });

  describe('verifica método read', () => {
    it('em caso de sucesso', async () => {
      const newCar = await carService.read();
      expect(newCar).to.be.deep.equal(carMockAll);
    });

    it('em caso de falha', async () => {
      try {
        await carService.read();
      } catch (error:any) {
        expect(error.message).to.be.deep.equal(ErrorTypes.EntityNotFound);
      }
    });
  });

  describe('verifica método readOne', () => {
    it('em caso de sucesso', async () => {
      const newCar = await carService.readOne(carMockWithId._id);
      expect(newCar).to.be.deep.equal(carMockWithId);
    });

    it('em caso de falha', async () => {
      try {
        await carService.readOne(carMockWithId._id);
      } catch (error:any) {
        expect(error.message).to.be.deep.equal(ErrorTypes.ObjectInvalid);
      }
    });
  });
})