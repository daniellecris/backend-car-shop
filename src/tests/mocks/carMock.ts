import { ICar } from '../../interfaces/ICar';

const carMock:ICar =
{
  buyValue: 45000,
  color: 'silver',
  doorsQty: 4,
  seatsQty: 5,
  model: 'Duster',
  year: 2020,
};

const carMockWithId:ICar & {_id:string} =
{
  _id: '62cf1fc6498565d94eba52cd',
  buyValue: 45000,
  color: 'silver',
  doorsQty: 4,
  seatsQty: 5,
  model: 'Duster',
  year: 2020,
}

export { carMock, carMockWithId };