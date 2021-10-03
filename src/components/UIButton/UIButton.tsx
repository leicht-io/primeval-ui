import React from 'react';
import {IProps} from './types';
import './UIButton.scss';
import {useClassNames} from '../../@core';

export const UIButton = React.memo((props: IProps): React.ReactElement => {
  const classes: string = useClassNames('btn btn-primary', [
    [props.type, `btn--${props.type}`],
    [props.disabled, 'btn--disabled']
  ]);

  return (
    <button
      tabIndex={ props.tabIndex || -1 }
      onClick={ props.onClick }
      className={ classes }>
      {props.text || props.children}
    </button>
  );
});

UIButton.displayName = 'UIButton';
