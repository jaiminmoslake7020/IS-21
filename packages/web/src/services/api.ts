import {
  coreSuccessResponse, coreFailedResponse
} from '../utils/helpers/api';
import {
  addNewErrorMsgWithTitle
} from '../utils/helpers/feedback';
import {FailedResponseType, SuccessResponseType} from '../types/base';
import {Developer, Product} from '../types/app';

export const getProducts = () : Promise<SuccessResponseType | FailedResponseType> => {
  return new Promise((resolve, reject) => {
    fetch('http://localhost:3000/api/products')
      .then(r => r.json())
      .then((response) => {
        if (response && Array.isArray(response)) {
          resolve({ ...coreSuccessResponse, response });
        } else {
          let e = addNewErrorMsgWithTitle('API Error', 'Response is empty. Please try again later.');
          e = { ...e, caughtError: response };
          resolve({ ...coreFailedResponse, error: e });
        }
      }).catch(() => {

      });
  })
}

export const createProduct = (body:Product) : Promise<SuccessResponseType | FailedResponseType> => {
  return new Promise((resolve, reject) => {
    fetch('http://localhost:3000/api/products', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })
      .then(r => r.json())
      .then((response) => {
        if (response) {
          resolve({ ...coreSuccessResponse, response });
        } else {
          let e = addNewErrorMsgWithTitle('API Error', 'Response is empty. Please try again later.');
          e = { ...e, caughtError: response };
          resolve({ ...coreFailedResponse, error: e });
        }
      }).catch(() => {

      });
  })
}

export const updateProduct = (id:string, body:Product) : Promise<SuccessResponseType | FailedResponseType> => {
  return new Promise((resolve, reject) => {
    fetch(`http://localhost:3000/api/products/${id}`, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })
      .then(r => r.json())
      .then((response) => {
        if (response) {
          resolve({ ...coreSuccessResponse, response });
        } else {
          let e = addNewErrorMsgWithTitle('API Error', 'Response is empty. Please try again later.');
          e = { ...e, caughtError: response };
          resolve({ ...coreFailedResponse, error: e });
        }
      }).catch(() => {

      });
  })
}

export const deleteProduct = (id:string) : Promise<SuccessResponseType | FailedResponseType> => {
  return new Promise((resolve, reject) => {
    fetch(`http://localhost:3000/api/products/${id}`, {
      method: 'DELETE',
    })
      .then(r => r.json())
      .then((response) => {
        if (response) {
          resolve({ ...coreSuccessResponse, response });
        } else {
          let e = addNewErrorMsgWithTitle('API Error', 'Response is empty. Please try again later.');
          e = { ...e, caughtError: response };
          resolve({ ...coreFailedResponse, error: e });
        }
      }).catch(() => {
      });
  })
}

export const createDeveloper = (body:Developer) : Promise<SuccessResponseType | FailedResponseType> => {
  return new Promise((resolve) => {
    fetch('http://localhost:3000/api/developers', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })
      .then(r => r.json())
      .then((response) => {
        if (response) {
          resolve({ ...coreSuccessResponse, response });
        } else {
          let e = addNewErrorMsgWithTitle('API Error', 'Response is empty. Please try again later.');
          e = { ...e, caughtError: response };
          resolve({ ...coreFailedResponse, error: e });
        }
      }).catch(() => {

      });
  })
}

export const getDevelopers = () : Promise<SuccessResponseType | FailedResponseType> => {
  return new Promise((resolve) => {
    fetch('http://localhost:3000/api/developers')
      .then(r => r.json())
      .then((response) => {
        if (response && Array.isArray(response)) {
          resolve({ ...coreSuccessResponse, response });
        } else {
          let e = addNewErrorMsgWithTitle('API Error', 'Response is empty. Please try again later.');
          e = { ...e, caughtError: response };
          resolve({ ...coreFailedResponse, error: e });
        }
      }).catch(() => {

      });
  })
}

export const upsertProduct = (body:any, id:string | undefined) : Promise<SuccessResponseType | FailedResponseType> => {
  if (id) {
    return updateProduct(id, body);
  }
  return createProduct(body);
}
