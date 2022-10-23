import React from 'react';
import './ui-root.scss';
import {UIScrollProgress} from '../UIScrollProgress';
import {UIMenu} from '../UIMenu';
import {IMenuItem} from '../../types';
import {useNavigate} from 'react-router-dom';
import {UIMobileMenu} from '../UIMobileMenu';

export const UIRoot = (props): React.ReactElement => {
  const navigate = useNavigate();
  const [menuItems] = React.useState<IMenuItem[]>(props.menu);

  return (
    <div className={ 'root' }>
      <div>
        <UIScrollProgress />

        <UIMenu
          logo={ props.logo }
          menuItems={ menuItems }
          onNavigate={ (destination: IMenuItem) => {
            navigate(destination.link as any);
          } }
        />

        <UIMobileMenu
          logo={ props.logo }
          menuItems={ menuItems }
          onNavigate={ (destination: IMenuItem) => {
            navigate(destination.link as any);
          } }
        />
      </div>
      <div className={ 'page-content' }>
        {props.children}
      </div>
    </div>
  );
};
