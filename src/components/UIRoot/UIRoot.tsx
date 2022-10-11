import React from 'react';
import './ui-root.scss';
import {UIScrollProgress} from '../UIScrollProgress';
import {UIMenu} from '../UIMenu';
import {logo} from '../../../examples/assets/logo';
import {IMenuItem} from '../../types';
import {useNavigate} from 'react-router-dom';

export const UIRoot = (props): React.ReactElement => {
  const navigate = useNavigate();
  const [menuItems] = React.useState<IMenuItem[]>(props.menu);

  return (
    <div className={ 'root' }>
      <div>
        <UIScrollProgress />

        <UIMenu
          transparent={ location.pathname !== '/' }
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