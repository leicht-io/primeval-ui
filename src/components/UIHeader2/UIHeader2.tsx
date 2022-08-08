import React from 'react';
import './ui-header-2.scss';
import {UIHeaderTypes} from './types';

export const UIHeader2 = (props: UIHeaderTypes) => {
  return (
    <div className="ui-header-2" style={ {background: `url(${props.backgroundImageUrl})`, backgroundSize: 'cover'} }>

      <div className="ui-header-2--left">
        <div className="ui-header-2--left-content">
          <div className="ui-header-2--left-breadcrumbs">{props.breadcrumbs}</div>
          <h1>{props.title}</h1>
          <p className="ui-header-2--left-excerpt">{props.excerpt}</p>
          <p className="ui-header-2--left-sub-title"><b>{props.subTitle}</b></p>
        </div>
      </div>
      <div>
      </div>

      <div className={ 'ui-header-2--overlay' } />
    </div>
  );
};