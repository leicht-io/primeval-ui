import React from 'react';
import {IProps} from './types';
import './UITyphography.scss';
import {useClassNames} from '../../@core';

export const UITypography = React.memo((props: IProps): React.ReactElement => {
  const GenericType = props.type;
  const classNames = useClassNames('ui-typography', [
    [props.fontWeight, `ui-typography--fw${props.fontWeight}`],
    [props.skeleton, 'ui-typography--skeleton']
  ], [props.skeleton, props.fontWeight]);

  return (
    <GenericType
      style={ {textAlign: props.textAlign || undefined} }
      className={ classNames }>
      {props.children}
    </GenericType>
  );
});
