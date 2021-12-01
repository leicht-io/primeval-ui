import {ButtonType, Size} from '../../@types';

export interface IProps {
  tabIndex?: number;
  text?: string;
  children?: any;
  type: ButtonType;
  onClick?: () => void;
  disabled?: boolean;
  size?: Size;
}
