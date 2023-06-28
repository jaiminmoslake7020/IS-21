import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import {Alert} from '@mui/material';
import {Edit} from '@mui/icons-material';
import ProductViewBox from '../components/app/ProductViewBox';
import {useAppDispatch, useAppSelector} from '../redux/store';
import {getProducts} from '../services/api';
import {FailedResponseType, SuccessResponseType} from '../types/base';
import {setProducts} from '../redux/reducers/productsData';
import {addNotification} from '../redux/reducers/feedback';
import {addNewErrorMsgWithTitle} from '../utils/helpers/feedback';
import {Product} from '../types/app';
import Header from '../components/app/Header';

export type HomePropTypes = {

};

function View(props: HomePropTypes) {
  const [
    productsLoading, setProductsLoading
  ] = useState<boolean>(true);

  const dispatch = useAppDispatch();

  const params = useParams();
  const { id } = params;

  const {
    products
  } = useAppSelector((store) => store.productsData);

  const productArray = products.filter((p:Product) => p.productId === id);
  const product = productArray.length === 1 ? productArray[0] : undefined;

  useEffect(() => {
    const mounts = () => {
      if (products.length === 0) {
        getProducts().then((r:SuccessResponseType | FailedResponseType) => {
          const { isSuccess, response: data, error } = r;
          if (isSuccess) {
            dispatch(setProducts(data));
          } else if (error && error.id) {
            dispatch(addNotification(error));
          } else {
            const eTwo = addNewErrorMsgWithTitle();
            dispatch(addNotification(eTwo));
          }
          setProductsLoading(false);
        });
      }
    };
    return mounts();
  }, [productsLoading, products])

  return (
    <>
      <Header product={product} />
      <h1 className="my-2">View Product</h1>
      {product ? <ProductViewBox product={product}/> : <Alert className="mt-4" severity="info" >There is no product with this ID.</Alert> }
    </>
  );
}

View.defaultProps = {};

export default View;
