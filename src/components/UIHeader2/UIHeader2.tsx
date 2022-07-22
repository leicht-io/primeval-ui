import React from 'react';
import './ui-header-2.scss';
import {UIHeaderTypes} from './types';

export const UIHeader2 = (props: UIHeaderTypes) => {
  return (
    <div className="ui-header-2" style={ {background: `url(${props.backgroundImageUrl})`, backgroundSize: 'cover'} }>

      <div>

      </div>
      <div>
      </div>

      <div className={ 'ui-header-2--overlay' }>

      </div>
    </div>
  );
};