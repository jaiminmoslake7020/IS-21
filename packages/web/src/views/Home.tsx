import React, {useEffect, useState} from 'react';
import ProductsListTable from '../components/app/ProductsListTable';
import {getProducts} from '../services/api';
import {FailedResponseType, SuccessResponseType} from '../types/base';
import {useAppDispatch} from '../redux/store';
import {setProducts} from '../redux/reducers/productsData';
import {addNewErrorMsgWithTitle} from '../utils/helpers/feedback';
import {addNotification} from '../redux/reducers/feedback';
import Header from '../components/app/Header';

export type HomePropTypes = {

};

function Home(props: HomePropTypes) {
  const {} = props;

  const [
    productsLoading, setProductsLoading
  ] = useState<boolean>(true);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const mounts = () => {
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
    };
    return mounts();
  }, [productsLoading])

  return (
    <>
      <Header product={undefined} />
      <h1 className="my-2">List Products</h1>
      <ProductsListTable />
    </>
  );
}

Home.defaultProps = {};

export default Home;
