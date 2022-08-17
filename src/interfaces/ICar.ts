import { z } from 'zod';
import { vehicleShema } from './IVehicle';

const carSchema = vehicleShema.extend({
  doorsQty: z.number().min(2).max(4),
  seatsQty: z.number().min(2).max(7),
});

type ICar = z.infer<typeof carSchema>;

export { ICar, carSchema };
