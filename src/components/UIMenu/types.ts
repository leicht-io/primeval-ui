import {IMenuItem} from '../../types';

export interface IProps {
  logo?: React.ReactNode;

  menuItems: IMenuItem[];
  onNavigate: (destination: IMenuItem) => void;
}
