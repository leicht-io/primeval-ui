export interface IMenuItem {
  title: string;
  link?: string;
  active?: boolean;
  icon?: any;
  expanded?: boolean;

  menuItems?: IMenuItem[];
}