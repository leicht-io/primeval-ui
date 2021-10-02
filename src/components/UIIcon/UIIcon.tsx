import {IProps} from './types';
import './UIIcon.scss';
import React from 'react';
import {icons} from './icons';

export const UIIcon = (props: IProps): React.ReactElement => {
  return (
    <div
      onClick={ props.onClick }
      className={ 'ui-i ui-i--' + (props.size ? props.size : 'sm') + ' ui-i--' + props.icon + (props.color ? ' ui-i--' + props.color : '') }>
      {icons[props.icon]}
    </div>
  );
};

UIIcon.displayName = 'UIIcon';
