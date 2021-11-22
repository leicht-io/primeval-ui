export interface SocialIcon {
  link: string;
  text?: string;
  icon: React.ReactElement;
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