import React from 'react';
import './ui-footer.scss';
import {UIDivider} from '../UIDivider';
import {IProps} from './types';
import {UISocialIcon} from '../UISocialIcon';
import {ISocialIcon} from '../../@models/ISocialIcon';

export const UIFooter = (props: IProps): React.ReactElement => {
  const getSocialIcons = (): React.ReactElement | null => {
    if (props.socialIcons) {
      return (
        <div className={ 'ui-footer--social-icons' }>
          {props.socialIcons.map((socialIcon: ISocialIcon, index: number) => {
            return (
              <UISocialIcon
                link={ socialIcon.link }
                icon={ socialIcon.icon }
                text={ socialIcon.text }
                key={ index } />
            );
          })}
        </div>
      );
    }

    return null;
  };

  return (
    <div className={ 'ui-footer' }>
      <UIDivider color={ 'grey' } showBorder={ true } size={ 'large' } />
      {getSocialIcons()}
    </div>
  );
};