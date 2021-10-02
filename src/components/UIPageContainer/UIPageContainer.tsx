import React from 'react';
import './UIPageContainer.scss';
import {Types} from './types';

export const UIPageContainer = (props: Types): React.ReactElement => {
  return (
    <div className="ui-page-container">
      {props.children}
    </div>
  );
};

UIPageContainer.displayName = 'UIPageContainer';
