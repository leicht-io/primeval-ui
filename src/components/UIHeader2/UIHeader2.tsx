import React from 'react';
import './ui-header-2.scss';
import {UIHeaderTypes} from './types';

export const UIHeader2 = (props: UIHeaderTypes) => {
  const baseClass: string = 'ui-header-2';

  const getClasses = (): string => {
    let classes = baseClass;

    if(props.size) {
      classes += ' ui-header-2--small';
    }

    return classes;
  };
  return (
    <div className={ getClasses() } style={ {background: `url(${props.backgroundImageUrl})`, backgroundSize: 'cover'} }>
      <div className={ 'ui-header-2--overlay' } />

      <div>
        <h1>{props.title.substr(0, 40)}</h1>
        <p>{props.subTitle?.substr(0, 100)}</p>
      </div>

    </div>
  );
};
