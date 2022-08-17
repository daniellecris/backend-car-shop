import { z } from 'zod';

const vehicleShema = z.object({
  buyValue: z.number().int(),
  color: z.string().min(3),
  model: z.string().min(3),
  status: z.boolean().optional(),
  year: z.number().min(1900).max(2022),
});

type IVehicle = z.infer<typeof vehicleShema>;

export { IVehicle, vehicleShema };