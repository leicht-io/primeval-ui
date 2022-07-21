export interface IMenuItem {
  title: string;
  link?: string;
  active?: boolean;

  primaryButton?: boolean;

  expanded?: boolean;

  menuItems?: IMenuItem[];
}