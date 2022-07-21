import React from 'react';
import './UIHeader.scss';
import {IProps} from './types';
import {animated, useTransition} from '@react-spring/web';
import { UIButton } from '../UIButton';

export const UIHeader = (props: IProps): React.ReactElement => {
  const transitions = useTransition(true, {
    from: {opacity: 0},
    enter: {opacity: 1}
  });

  const getTitle = () => {
    return transitions((styles, item) => item &&
                <h1>
                  <animated.div style={ styles }>{props.title}</animated.div>
                </h1>
    );
  };

  const getClasses = () => {
    const baseClasses: string = 'ui-header';

    return baseClasses;
  };

  const getButtons = () => {
    if(props.buttons) {
      return (
        <div>
          {props.buttons.map(button => {
            return (
              <UIButton size={ 'small' } text={ button.text } onClick={ button.onClick } type={ button.type } />
            );
          })}
        </div>
      );
    }

    return null;
  };

  const getBreadcrumbs = () => {
    return (
      <div>
        <p>Tst / Test</p>
      </div>
    );
  };

  return (
    <header className={ getClasses() }>
      <div className="ui-header--title">
        {getTitle()}
        {getBreadcrumbs()}
      </div>
      {getButtons()}
    </header>
  );
};
