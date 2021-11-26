import React from 'react';
import './UIPageContainer.scss';
import {Types} from './types';
import {UITypography} from '../UITypography';

export const UIPageContainer = (props: Types): React.ReactElement => {
  return (
    <div className={ 'ui-page-container ' + (props.height ? `ui-page-container--${props.height}` : undefined) }>
      {props.title && (
        <div className="ui-page-container--title">
          <UITypography type="h2">{props.title}</UITypography>
        </div>
      )}
      {props.children}
    </div>
  );
};

UIPageContainer.displayName = 'UIPageContainer';
