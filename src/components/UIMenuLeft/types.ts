import {IMenuItem} from '../../types';

export interface IProps {
  menuItems: IMenuItem[];
  logo: React.ReactElement;
  collapsedLogo?: React.ReactElement;

  onNavigate: (destination: IMenuItem) => void;

  collapsed?: boolean;

  footer?: any;
}
