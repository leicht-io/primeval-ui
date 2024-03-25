import React from 'react';
import './ui-root.scss';
import {IMenuItem} from '../../types';
import {useNavigate} from 'react-router-dom';
import {UIMenuNew} from '../UIMenuNew/UIMenuNew';

export const UIRoot = (props): React.ReactElement => {
  const navigate = useNavigate();
  const [menuItems, setMenuItems ] = React.useState<IMenuItem[]>(props.menu);

  return (
    <div className={ 'root' }>
      <div>
        <UIMenuNew
          onNavigate={ (destination: IMenuItem) => {
            navigate(destination.link);
          } }
          menuItems={ menuItems }
          logo={ props.logo } />

        {/* <UIMenu
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
        /> */ }
      </div>
      <div className={ 'page-content' }>
        {props.children}
      </div>
    </div>
  );
};
