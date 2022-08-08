import {IMenuItem} from '../../types';

export interface IProps {
  menuItems: IMenuItem[];
  logo: any;
  transparent?: boolean;

  onNavigate: (destination: IMenuItem) => void;
}
