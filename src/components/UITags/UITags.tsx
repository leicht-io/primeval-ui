import React from 'react';
import './UITags.scss';
import {IProps} from './types';
import {ITag} from '../../types';
import {animated, useTransition} from '@react-spring/web';
import {opacity} from '../../@core';

export const UITags = React.memo((props: IProps): React.ReactElement => {
  const transitions = useTransition(true, opacity());

  return (
    <div className="ui-tags">
      {
        props.tags.map((tag: ITag, index: number) => {
          return transitions((styles, item) => item && (
            <animated.div
              style={ styles }
              key={ index }
              className={ 'ui-tag ui-tag--' + tag.type }>
              {tag.name}
            </animated.div>
          ));
        })
      }
    </div>
  );
});
