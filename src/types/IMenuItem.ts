export interface IMenuItem {
  title: string;
  link?: string;
  active?: boolean;

  expanded?: boolean;

  menuItems?: IMenuItem[];
}