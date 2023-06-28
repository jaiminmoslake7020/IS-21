import * as React from 'react';
import {useEffect, useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Link} from 'react-router-dom';
import {DeveloperId, Product, ProductLabel} from '../../types/app';
import {useAppSelector} from '../../redux/store';
import DeveloperLabel from './DeveloperLabel';
import SearchBar from './SearchBar';

export default function ProductsListTable() {
  const {
    products: productsInitials
  } = useAppSelector((store) => store.productsData);

  const [products, setFilteredProducts] = useState<Product[]>(productsInitials);

  useEffect(() => {
    setFilteredProducts(productsInitials);
  }, [productsInitials])

  return (
    <>
      <div className="flex flex-col md:flex-row w-full items-center">
        <div className="w-full md:w-1/2 lg:w-1/3">
          <h1 className="my-2">
            List Products (Total
            {' '}
            <strong>{products.length}</strong>
            {' '}
            products.)
          </h1>
        </div>
        <div className="w-full md:w-1/2 lg:w-2/3">
          <SearchBar setFilteredProducts={(data:Product[]) => {
            console.log('data', data);
            setFilteredProducts(data);
          }} />
        </div>
      </div>
      <TableContainer className="product-list-table" component={Paper}>
        <Table sx={{minWidth: 650}} aria-label="product list table">
          <TableHead>
            <TableRow>
              <TableCell>{ProductLabel.productId}</TableCell>
              <TableCell>{ProductLabel.productName}</TableCell>
              <TableCell align="right">{ProductLabel.startDate}</TableCell>
              <TableCell align="right">{ProductLabel.methodology}</TableCell>
              <TableCell align="right">{ProductLabel.scrumMasterName}</TableCell>
              <TableCell align="right">{ProductLabel.productOwnerName}</TableCell>
              <TableCell align="right">{ProductLabel.location}</TableCell>
              <TableCell align="center">{ProductLabel.Developers}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody className={"tbody"}>
            {products.map((product: Product) => (
              <TableRow
                key={product.productId}
                sx={{'&:last-child td, &:last-child th': {border: 0}}}
              >
                <TableCell component="th" scope="row">
                  <Link className="btn btn-link" to={`/view/${product.productId}`}>
                    {product.productId}
                  </Link>
                </TableCell>
                <TableCell component="th" scope="row">
                  <Link className="btn btn-link" to={`/view/${product.productId}`}>
                    {product.productName}
                  </Link>
                </TableCell>
                <TableCell align="right">{(new Date(product.startDate)).toLocaleDateString()}</TableCell>
                <TableCell align="right">{product.methodology}</TableCell>
                <TableCell align="right">{product.scrumMasterName}</TableCell>
                <TableCell align="right">{product.productOwnerName}</TableCell>
                <TableCell align="right">{product.location}</TableCell>
                <TableCell align="left">
                  {product.Developers.map((d: DeveloperId, index) => {
                    return <DeveloperLabel key={`${d}-${index}`} id={d}/>;
                  })}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
