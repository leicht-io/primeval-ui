import React from 'react';
import {IProps} from './types';
import './UIButton.scss';
import {useClassNames} from '../../@core';

export const UIButton = (props: IProps): React.ReactElement => {
  const classes: string = useClassNames('ui-button ui-button--primary', [
    [props.type, `ui-button--${props.type}`],
    [props.disabled, 'ui-button--disabled'],
    [props.size, `ui-button--${props.size}`],
  ]);

  return (
    <button
      tabIndex={ props.tabIndex || -1 }
      onClick={ props.onClick }
      className={ classes }>
      {props.text || props.children}
    </button>
  );
};
