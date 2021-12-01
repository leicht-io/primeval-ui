import React from 'react';
import {IProps} from './types';
import './UIDivider.scss';

export const UIDivider = React.memo((props: IProps): React.ReactElement => {
  const getClasses = (): string => {
    return 'ui-divider ' + (props.size ? ' ui-divider--' + props.size : '') + (props.showBorder ? ' ui-divider--border' : '') + (props.vertical ? ' ui-divider--vertical' : '') + (props.color ? (' ui-divider--' + props.color) : '');
  };

  return (
    <div className={ getClasses() } />
  );
});
