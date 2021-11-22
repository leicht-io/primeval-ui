import React from 'react';
import './ui-footer.scss';
import {UIGrid} from '../UIGrid';
import {UITypography} from '../UITypography';
import {UIDivider} from '../UIDivider';
import {UIIcon} from '../UIIcon';
import {IProps, SocialIcon} from './types';

export const UIFooter = (props: IProps): React.ReactElement => {
  return (
    <div className={ 'ui-footer' }>
      <UIDivider color={ 'grey' } showBorder={ true } size={ 'large' } />

      <UIGrid centerItems={ true } columns={ 'three' }>
        {props.socialIcons && props.socialIcons.map((socialIcon: SocialIcon, index: number) => {
          return (
            <a target="_blank" href={ socialIcon.link } key={ index } rel="noreferrer"
              className='social-icon'>
              <UIIcon icon={ socialIcon.icon } />
              <UITypography type="p">{socialIcon.text}</UITypography>
            </a>
          );
        })}
      </UIGrid>

      <UIGrid columns={ 'two' }>
        {props.left && (
          <UITypography type="p" fontWeight={ 700 }>{props.left.text}</UITypography>
        )}

        {props.right && (
          <UITypography type="p" textAlign="right"><a
            href={ props.right.link }>{props.right.text}</a></UITypography>
        )}
      </UIGrid>
    </div>
  );
};