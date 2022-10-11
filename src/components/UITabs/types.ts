export interface ITab {
  id: string;
  title: string;

  icon?: string;
  count?: number | string;
}

export interface Types {
  linkPrefix: string;

  tabs: ITab[];
}
