import React from 'react';
import {IProps} from './types';
import './UINotification.scss';
import {UITypography} from '../UITypography';
import {animated, useTransition} from '@react-spring/web';
import {opacity} from '../../@core';

export const UINotification = React.memo((props: IProps): React.ReactElement => {
  const transitions = useTransition(true, opacity());

  return transitions((styles, item) => item && (
    <animated.div
      style={ styles }
      className={ `notification notification--${props.type}` }>
      <UITypography type={ 'p' }>
        <strong>{props.title}</strong>
        {props.description}
      </UITypography>
    </animated.div>
  ));
});
