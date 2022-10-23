import React from 'react';
import './UIMobileMenu.scss';
import {IProps} from './types';
import {IMenuItem} from '../../types';
import {BiMenu} from 'react-icons/bi';
import { useSwipeable } from 'react-swipeable';

export const UIMobileMenu = (props: IProps): React.ReactElement => {
  const baseClass: string = 'ui-menu';

  const [toggleResponsiveMenu, setToggleResponsiveMenu] = React.useState<boolean>(false);

  // TODO: Refactor menu to responsive menu and desktop menu
  // TODO: toggle body scroll
  const escFunction = React.useCallback((event) => {
    if (event.key === 'Escape') {
      setToggleResponsiveMenu(false);
    }
  }, []);

  React.useEffect(() => {
    document.addEventListener('keydown', escFunction, false);

    return () => {
      document.removeEventListener('keydown', escFunction, false);
    };
  }, []);

  const getMenuItem = (menuItem: IMenuItem) => {
    return (
      <div className={ 'ui-menu--item' }>
        <a
          href={ menuItem.link }
          onClick={ (event) => {
            handleClick(event, menuItem);
          } }>
          <span>{menuItem.icon}</span>
          <span>{menuItem.title}</span>
        </a>
      </div>
    );
  };

  const handleClick = (event: any, menuItem: IMenuItem): void => {
    if(menuItem.menuItems && menuItem.menuItems.length > 0) {
      event.preventDefault();

    } else {
      setToggleResponsiveMenu(false);

      event.preventDefault();
      window.scrollTo(0, 0);

      props.onNavigate(menuItem);
    }
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      setToggleResponsiveMenu(false);
    },
  });

  const getMenu = (large: boolean): React.ReactNode => {
    if (large) {
      return (
        <>
          <nav { ...swipeHandlers } className={ 'ui-menu--large ' + (toggleResponsiveMenu ? 'ui-menu--large-visible' : '') }>
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
          <div className={ 'ui-menu--logo' }>
            {props.logo}
          </div>
        </div>

        {getMenu(true)}
      </div>

      <div
        onClick={ () => {
          setToggleResponsiveMenu(false);
        } }
        className={ 'ui-menu--backdrop ' + (toggleResponsiveMenu ? 'ui-menu--backdrop-visible' : '') } />
    </>
  );
};
