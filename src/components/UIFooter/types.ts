import {IProps as IUIIconProps} from '../UIIcon/types';

export interface SocialIcon {
  link: string;
  text?: string;
  icon: IUIIconProps['icon'];
}

export interface IProps {
  left?: {
    text: string;
  };
  right?: {
    text: string;
    link: string;
  };
  socialIcons?: SocialIcon[];
}