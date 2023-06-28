import React, { useCallback } from 'react';
import {TextField} from '@mui/material';
import {useAppSelector} from '../../redux/store';
import {Developer, Product} from '../../types/app';

export type SearchBarPropTypes = {
  setFilteredProducts: Function,
};

function SearchBar(props: SearchBarPropTypes) {
  const {
    setFilteredProducts
  } = props;
  const {
    products
  } = useAppSelector((store) => store.productsData);
  const {
    developers
  } = useAppSelector((store) => store.developersData);

  const applySearch = useCallback((search: string | unknown) => {
    let newItems = products as Product[];
    if (search && search !== '' && typeof search === 'string') {
      const searchLowerCase = (search || '').toLowerCase();
      newItems = products.filter((item: Product) => {
        const {
          productName, location, productOwnerName, scrumMasterName, Developers
        } = item;
        const DevelopersJoin = developers.filter((f:Developer) => Developers.includes(f.id as string)).map((t) => t.name.toLowerCase()).join(',');
        const hasName = (productName || '').toLowerCase().indexOf(searchLowerCase) !== -1;
        const hasLocation = (location || '').toLowerCase().indexOf(searchLowerCase) !== -1;
        const hasScrum = (scrumMasterName || '').toLowerCase().indexOf(searchLowerCase) !== -1;
        const hasOwner = (productOwnerName || '').toLowerCase().indexOf(searchLowerCase) !== -1;
        const hasDeveloper = (DevelopersJoin || '').toLowerCase().indexOf(searchLowerCase) !== -1;
        return hasName || hasLocation || hasScrum || hasOwner || hasDeveloper;
      });
    }
    return newItems;
  }, [products, developers]);

  return (
    <div className="my-4">
      <TextField
        label="Search Product by Product Name, Location, Owner, Scrum Master, Developer"
        name="developer"
        onChange={(e) => {
          const search = e.target.value;
          console.log('setDeveloperName', search);
          setFilteredProducts(applySearch(search));
        }}
        fullWidth
        required
      />
    </div>
  );
}

SearchBar.defaultProps = {};

export default SearchBar;
