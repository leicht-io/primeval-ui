import React from 'react';
import {IProps} from './types';
import './UIButton.scss';

export const UIButton = React.memo((props: IProps): React.ReactElement => {
  return (
    <button
      tabIndex={ props.tabIndex || -1 }
      onClick={ props.onClick }
      className={ `btn btn--${props.type} ${props.disabled ? 'btn--disabled' : ''}` }>
      {props.text || props.children}
    </button>
  );
});

UIButton.displayName = 'UIButton';
