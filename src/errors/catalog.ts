export enum ErrorTypes {
  EntityNotFound = 'EntityNotFound',
  InvalidMongoId = 'InvalidMongoId',
  ObjectInvalid = 'ObjectInvalid',
}

  type ErrorResponseObject = { 
    error: string;
    httpStatus: number
  };

export type ErrorCatalog = {
  [key in ErrorTypes]: ErrorResponseObject
  
};
  
export const errorCatalog: ErrorCatalog = {
  EntityNotFound: {
    error: 'Entity not found',
    httpStatus: 404,
  },
  InvalidMongoId: {
    error: 'Id must have 24 hexadecimal characters',
    httpStatus: 400,
  },
  ObjectInvalid: {
    error: 'Object not found',
    httpStatus: 404,
  },
}; 