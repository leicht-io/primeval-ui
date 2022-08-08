import {IProps as IUIIconProps} from '../UIIcon/types';

export interface SocialIcon {
  link: string;
  icon: IUIIconProps['icon'];
}

export interface IProps {
  text: string;
  socialIcons?: SocialIcon[];
}