import {UITypography} from '../UITypography';
import React from 'react';
import {IProps} from './types';
import './UISocialIcon.scss';
import {IconType} from '@react-icons/all-files';

export const UISocialIcon = (props: IProps): React.ReactElement => {
  const getIcon = (): IconType | null => {
    if (props.icon) {
      return props.icon;
    }

    return null;
  };

  const getText = (): React.ReactElement | null => {
    if (props.text) {
      return (
        <UITypography type="p">{props.text}</UITypography>
      );
    }

    return null;
  };

  return (
    <a
      target="_blank"
      href={ props.link }
      rel="noreferrer"
      className='ui-social-icon'>
      {getIcon()}
      {getText()}
    </a>
  );
};