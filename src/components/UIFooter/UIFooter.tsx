import React from 'react';
import './ui-footer.scss';
import {UITypography} from '../UITypography';
import {UIIcon} from '../UIIcon';
import {IProps, SocialIcon} from './types';

export const UIFooter = (props: IProps): React.ReactElement => {
  return (
    <div className={ 'ui-footer' }>
      <div className={ 'ui-footer--content' }>
        <div>
          <UITypography type="p">{props.text}</UITypography>
        </div>

        <div className={ 'ui-footer--socials' }>
          {props.socialIcons && props.socialIcons.map((socialIcon: SocialIcon, index: number) => {
            return (
              <UIIcon
                onClick={ () => {
                  window.open(socialIcon.link,'_blank');
                } }
                key={ index }
                icon={ socialIcon.icon } />
            );
          })}
        </div>
      </div>
    </div>
  );
};