import {IMenuItem} from '../../types';

export interface IProps {
  menuItems: IMenuItem[];

  onNavigate: (destination: IMenuItem) => void;
}
