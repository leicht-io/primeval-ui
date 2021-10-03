import React from 'react';
import {IProps} from './types';
import './UIModal.scss';
import {UIIcon} from '../UIIcon';
import {opacity, useBodyScrollLock, useEventListener} from '../../@core';
import {animated, useTransition} from '@react-spring/web';

// TODO: add loader to iframe content.
export const UIModal = (props: IProps): React.ReactElement => {
  useEventListener('keydown', (event) => {
    if (event.key === 'Escape' && props.onHide) {
      props.onHide();
    }
  });

  useBodyScrollLock(props.show, [props.show]);

  const transitions = useTransition(props.show, opacity());

  const getContent = (): React.ReactElement => {
    if (props.type === 'IFRAME') {
      return <iframe src={ props.iframeUrl } />;
    } else {
      return props.children;
    }
  };

  return transitions((styles, item) => item && (
    <animated.div
      style={ styles }
      className={ 'ui-modal--container ' + (props.type === 'IFRAME' ? 'ui-modal--container-with-iframe' : 'ui-modal--container-with-html') }
      onClick={ (event) => {
        if ((event.target as HTMLInputElement).classList.contains('ui-modal--container') && props.onHide) {
          props.onHide();
        }
      } }>
      <div className="ui-modal--wrapper">
        <div className="ui-modal--title-wrapper">
          <div className="ui-modal--title"><h5>{props.title}</h5></div>
          <div className="ui-modal--buttons">
            <div className="ui-modal--buttons-close" onClick={ () => {
              if (props.onHide) {
                props.onHide();
              }
            } }>
              <UIIcon icon={ 'close' } />
            </div>
          </div>
        </div>
        <div className="ui-modal--content--wrapper">
          <div className="ui-modal--content">
            {getContent()}
          </div>
        </div>
      </div>
    </animated.div>
  ));
};
