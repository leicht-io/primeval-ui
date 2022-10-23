import React from 'react';
import './UIMenu.scss';
import {IProps} from './types';
import {IMenuItem} from '../../types';
import { useSwipeable } from 'react-swipeable';

export const UIMenu = (props: IProps): React.ReactElement => {
  const baseClass: string = 'ui-menu';

  const currentSubMenuItem = React.useRef();

  const [toggleResponsiveMenu, setToggleResponsiveMenu] = React.useState<boolean>(false);
  const [showSubMenu, setShowSubMenu] = React.useState<boolean>(false);

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
    if(!menuItem.menuItems || menuItem.menuItems.length === 0) {
      event.preventDefault();
      setShowSubMenu(false);
    }

    console.log(menuItem, currentSubMenuItem.current);
    if(currentSubMenuItem.current && menuItem.link === currentSubMenuItem.current.link) {
      event.preventDefault();

      setShowSubMenu(false);
      return;
    }

    currentSubMenuItem.current = null;

    if(menuItem.menuItems && menuItem.menuItems.length > 0) {
      event.preventDefault();

      setShowSubMenu(true);
    } else {
      setToggleResponsiveMenu(false);

      event.preventDefault();
      window.scrollTo(0, 0);

      props.onNavigate(menuItem);
    }

    if(menuItem.menuItems) {
      currentSubMenuItem.current = menuItem;
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
      {getMenu(false)}

      {showSubMenu && (
        <div className={ 'ui-menu--submenu' }>

        </div>
      )}

      <div
        onClick={ () => {
          setToggleResponsiveMenu(false);
        } }
        className={ 'ui-menu--backdrop ' + (toggleResponsiveMenu ? 'ui-menu--backdrop-visible' : '') } />
    </>
  );
};
