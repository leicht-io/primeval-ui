import React from 'react';
import './UIGrid.scss';
import {IProps} from './types';

export const UIGrid = (props: IProps): React.ReactElement => {
  const getClasses = () => {
    const centerVertical: string = props.centerVertical ? 'grid--align-center-vertical' : '';
    const centerItems: string = props.centerItems ? 'grid--center-items' : '';
    const columns: string = props.columns ? 'grid-' + props.columns + '-columns' : '';
    const rows: string = props.row ? 'grid--direction-row' : '';

    return centerItems + ' ' + centerVertical + ' ' + columns + ' ' + rows;
  };

  return (
    <div className={ 'grid-container ' + getClasses() }>
      {props.children}
    </div>
  );
};
UIGrid.displayName = 'UIGrid';