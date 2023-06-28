import React from 'react';
import Chip from '@mui/material/Chip';
import {Tooltip} from '@mui/material';
import {useAppSelector} from '../../redux/store';

export type DeveloperLabelPropTypes = {
  id:string,
  onItemRemoved: Function,
};

function RemovableDeveloperLabel(props: DeveloperLabelPropTypes) {
  const {id, onItemRemoved} = props;
  const {
    developers
  } = useAppSelector((store) => store.developersData);
  const developerArray = developers.filter((d) => d.id === id);
  const developer = developerArray.length > 0 ? developerArray[0] : undefined;
  return (
    developer
      ? (
        <Tooltip title="Remove Developer">
          <Chip key={`${id}`}
            label={developer.name}
            variant="outlined"
            onDelete={() => {
              onItemRemoved();
            }}
          />
        </Tooltip>
      )
      : <Chip key={`${id}`} label="NA" variant="outlined" />
  );
}

RemovableDeveloperLabel.defaultProps = {};

export default RemovableDeveloperLabel;
