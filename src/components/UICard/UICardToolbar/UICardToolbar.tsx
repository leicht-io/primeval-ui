import React from 'react';
import {IProps} from './types';
import './UICardToolbar.scss';

export const UICardToolbar = (props: IProps): React.ReactElement => {
  return (
    <div className= 'ui-card-toolbar'>
      <div className="ui-icons">
        {/* props.icons && props.icons.map((icon, index) => {
          return icon;
        }) */}
      </div>
    </div>
  );
};
