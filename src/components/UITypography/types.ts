export interface IProps {
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'a';
  children?: any;
  fontWeight?: 300 | 700;
  skeleton?: boolean;

  textAlign?: 'left' | 'right';
}
