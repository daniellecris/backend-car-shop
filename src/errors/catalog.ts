export enum ErrorTypes {
  EntityNotFound = 'EntityNotFound',
  InvalidMongoId = 'InvalidMongoId',
  ObjectInvalid = 'ObjectInvalid',
}

  type ErrorResponseObject = { 
    message: string;
    httpStatus: number
  };

export type ErrorCatalog = {
  [key in ErrorTypes]: ErrorResponseObject
  
};
  
export const errorCatalog: ErrorCatalog = {
  EntityNotFound: {
    message: 'Entity not found',
    httpStatus: 404,
  },
  InvalidMongoId: {
    message: 'Id must be a 24 characters hexadecimal',
    httpStatus: 400,
  },
  ObjectInvalid: {
    message: 'Object not found',
    httpStatus: 404,
  },
}; 