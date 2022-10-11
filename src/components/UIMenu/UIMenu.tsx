import React from 'react';
import './UIMenu.scss';
import {IProps} from './types';
import {IMenuItem} from '../../types';
import {BiMenu} from 'react-icons/bi';

export const UIMenu = (props: IProps): React.ReactElement => {
  const baseClass: string = 'ui-menu';

  const [toggleResponsiveMenu, setToggleResponsiveMenu] = React.useState<boolean>(false);

  const getMenuItem = (menuItem: IMenuItem) => {
    return (
      <div className={ 'ui-menu--item' }>
        <a
          href={ menuItem.link }
          onClick={ (event) => {
            handleClick(event, menuItem);
          } }>
          {menuItem.icon}
          {menuItem.title}
        </a>
      </div>
    );
  };

  const handleClick = (event: any, menuItem: IMenuItem) => {
    setToggleResponsiveMenu(false);

    event.preventDefault();
    window.scrollTo(0, 0);

    props.onNavigate(menuItem);
  };

  const getMenu = (large: boolean): React.ReactNode => {
    if (large) {
      return (
        <>
          <nav className={ 'ui-menu--large ' + (toggleResponsiveMenu ? 'ui-menu--large-visible' : '') }>
            <div className="content">
              {props.menuItems.map((menuItem: IMenuItem, index: number) => {
                return (
                  <div
                    className='item'
                    key={ index }>
                    {getMenuItem(menuItem)}
                  </div>
                );
              })}
            </div>
          </nav>
        </>
      );
    }

    return (
      <nav className={ baseClass }>
        <div className="content">
          {props.menuItems.map((menuItem: IMenuItem, index: number) => {
            return (
              <div
                className='item'
                key={ index }>
                {getMenuItem(menuItem)}
              </div>
            );
          })}
        </div>
      </nav>
    );
  };

  return (
    <>
      <div className={ 'ui-menu--top-wrapper' }>
        <div className={ 'ui-menu--top' }>
          <div
            onClick={ () => {
              setToggleResponsiveMenu(!toggleResponsiveMenu);
            } }
            className="ui-menu--toggle">
            <BiMenu />
          </div>
        </div>

        {getMenu(true)}
      </div>

      {getMenu(false)}

      <div
        onClick={ () => {
          setToggleResponsiveMenu(false);
        } }
        className={ 'ui-menu--backdrop ' + (toggleResponsiveMenu ? 'ui-menu--backdrop-visible' : '') } />
    </>
  );
};
