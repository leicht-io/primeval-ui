import React from 'react';
import './ui-footer.scss';
import {UIPageContainer} from '../UIPageContainer';
import {UIGrid} from '../UIGrid';
import {UITypography} from '../UITypography';
import {UIDivider} from '../UIDivider';
import {UIIcon} from '../UIIcon';
import {IProps, SocialIcon} from './types';

export const UIFooter = (props: IProps): React.ReactElement => {
  return (
    <UIPageContainer>
      <div className={ 'ui-footer' }>
        <UIDivider color={ 'grey' } showBorder={ true } size={ 'large' } />

        <UIGrid centerItems={ true } columns={ 'three' }>
          {props.socialIcons && props.socialIcons.map((socialIcon: SocialIcon, index: number) => {
            return (
              <a href={ socialIcon.link } key={ index }>
                <UIIcon icon={ socialIcon.icon } />
              </a>
            );
          })}
        </UIGrid>

        <UIDivider color={ 'grey' } showBorder={ true } size={ 'large' } />

        <UIGrid columns={ 'two' }>
          <UITypography type="p" fontWeight={ 700 }>{props.leftText}</UITypography>
          <UITypography type="p" textAlign="right">{props.rightText}</UITypography>
        </UIGrid>
      </div>
    </UIPageContainer>
  );
};