import React from 'react';
import Chip from '@mui/material/Chip';
import {useAppSelector} from '../../redux/store';

export type DeveloperLabelPropTypes = {
  id:string
};

function DeveloperLabel(props: DeveloperLabelPropTypes) {
  const {id} = props;
  const {
    developers
  } = useAppSelector((store) => store.developersData);
  const developerArray = developers.filter((d) => d.id === id);
  const developer = developerArray.length > 0 ? developerArray[0] : undefined;
  return (
    developer
      ? <Chip key={`${id}`} label={developer.name} variant="outlined" />
      : <Chip key={`${id}`} label="NA" variant="outlined" />
  );
}

DeveloperLabel.defaultProps = {};

export default DeveloperLabel;
