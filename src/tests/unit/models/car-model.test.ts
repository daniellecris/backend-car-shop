import { expect } from 'chai';
import sinon from 'sinon';
import CarModel from '../../../models/CarModel';
import { Model } from 'mongoose';
import { carMock, carMockWithId } from '../../mocks/carMock';

describe('CarModel', () => {
  const car = new CarModel();
  let createStub: sinon.SinonStub;

  before(() => {
    createStub = sinon.stub(Model, 'create').resolves(carMockWithId);
  });

  after(() => {
    sinon.restore();
  });

  describe('verifica método create', () => {
    it('em caso de sucesso', async() => {
      const newCar = await car.create(carMock);
      expect(newCar).to.be.deep.equal(carMockWithId);
      sinon.assert.calledOnce(createStub);
      sinon.assert.calledWith(createStub, carMock);
    })
  })
})