import {IProps as IUIIconProps} from '../UIIcon/types';

export interface SocialIcon {
  link: string;
  text?: string;
  icon: IUIIconProps['icon'];
}

export interface IProps {
  leftText?: string;
  rightLink?: string;
  rightText?: string;
  socialIcons?: SocialIcon[];
}