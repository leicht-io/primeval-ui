import React from 'react';
import {IProps} from './types';
import './UIDivider.scss';

export const UIDivider = React.memo((props: IProps): React.ReactElement => {
  const getClasses = (): string => {
    return 'divider ' + (props.size ? ' divider-' + props.size : '') + (props.showBorder ? ' divider-border' : '') + (props.vertical ? ' divider--vertical' : '') + (props.color ? (' divider--' + props.color) : '');
  };

  return (
    <div className={ getClasses() } />
  );
});

UIDivider.displayName = 'UIDivider';
