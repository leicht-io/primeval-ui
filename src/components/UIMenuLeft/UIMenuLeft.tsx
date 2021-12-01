import React from 'react';
import './UIMenuLeft.scss';
import {IProps} from './types';
import {IMenuItem} from '../../types';
import {UIScrollProgress} from '../UIScrollProgress';
import {IoChevronDown} from '@react-icons/all-files/io5/IoChevronDown';
import {IoChevronUp} from '@react-icons/all-files/io5/IoChevronUp';
import { useLocation } from 'react-router-dom';

export const UIMenuLeft = (props: IProps): React.ReactElement => {
  const location = useLocation();

  const [menuItems, setMenuItems] = React.useState<IMenuItem[]>([]);

  React.useEffect(() => {
    setMenuItems(props.menuItems);
  }, [props.menuItems]);

  const getMenuItemClassNames = (menuItem: IMenuItem): string => {
    let classNames: string = 'ui-navigation--item';

    if (menuItem.icon) {
      classNames += ' ui-navigation--item-with-icon';
    }

    if (menuItem.menuItems && menuItem.menuItems.length > 0) {
      classNames += ' ui-navigation--item-with-children';
    }

    if (menuItem.active || hasActiveChildren(menuItem) || location.pathname === menuItem.link) {
      classNames += ' ui-navigation--item-active';
    }

    return classNames;
  };

  const getChevron = (menuItem: IMenuItem): React.ReactElement | null => {
    if (menuItem.menuItems && menuItem.menuItems.length > 0) {
      if (menuItem.expanded) {
        return <IoChevronUp />;
      } else {
        return <IoChevronDown />;
      }
    }

    return null;
  };

  const getAnchor = (menuItem: IMenuItem, index: number): React.ReactElement => {
    return (
      <a
        key={ index }
        className={ getMenuItemClassNames(menuItem) }
        href={ (menuItem.menuItems && menuItem.menuItems.length > 0) ? '#' : menuItem.link }
        onClick={ (event) => {
          handleClick(event, menuItem);
        } }>
        <>
          {menuItem.icon}
          <span className="ui-navigation--item-text">{menuItem.title}</span>
          {getChevron(menuItem)}
        </>
      </a>
    );
  };

  const getMenuItem = (menuItem: IMenuItem, index: number) => {
    return (
      <>
        {getAnchor(menuItem, index)}

        {menuItem.expanded && menuItem.menuItems && (
          <div className="ui-navigation--item-children">
            {menuItem.menuItems.map((menuItem: IMenuItem, index: number) => {
              return getAnchor(menuItem, index);
            })}
          </div>
        )}
      </>
    );
  };

  const handleClick = (event: any, menuItem: IMenuItem) => {
    const tempItems = menuItems.map(item => {
      item.active = item.link === menuItem.link;

      if (item.menuItems && item.menuItems.length > 0) {
        if (item.link === menuItem.link) {
          item.expanded = !menuItem.expanded;
        } else {
          item.expanded = false;
        }
      }

      return item;
    });
    setMenuItems(tempItems);

    event.preventDefault();

    if (!menuItem.menuItems || menuItem.menuItems.length === 0) {
      props.onNavigate(menuItem);
    }
  };

  const hasActiveChildren = (menuItem: IMenuItem) => {
    let hasActiveChildren: boolean = false;

    if (menuItem.menuItems) {
      menuItem.menuItems.forEach((menuItem: IMenuItem) => {
        if (menuItem.active) {
          hasActiveChildren = true;
        }
      });
    }

    return hasActiveChildren;
  };

  return (
    <div className={ 'ui-navigation ' + (props.collapsed ? 'ui-navigation--collapsed' : undefined) }>
      <UIScrollProgress />

      <div className="ui-navigation--content">
        <div className="ui-navigation--logo">
          <a onClick={ (event) => {
            handleClick(event, {title: 'Home', link: '/'});
          } }>
            {props.logo}
          </a>
        </div>

        <nav className="ui-navigation--items">
          {props.menuItems.map((menuItem: IMenuItem, index: number) => {
            return getMenuItem(menuItem, index);
          })}
        </nav>

        {props.footer && (
          <div className={ 'ui-navigation--footer' }>
            {props.footer}
          </div>
        )}
      </div>
    </div>
  );
};
