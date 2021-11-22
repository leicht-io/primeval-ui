import React from 'react';
import './UIMenuLeft.scss';
import {IProps} from './types';
import {IMenuItem} from '../../types';
import {UIScrollProgress} from '../UIScrollProgress';

export const UIMenuLeft = (props: IProps): React.ReactElement => {
  const [menuItems, setMenuItems] = React.useState<IMenuItem[]>([]);

  React.useEffect(() => {
    setMenuItems(props.menuItems);
  }, [props.menuItems]);

  const getMenuItem = (menuItem: IMenuItem, index: number) => {
    return (
      <>
        <a
          key={ index }
          className={ 'ui-navigation--item ' + ((menuItem.menuItems && menuItem.menuItems.length > 0) ? 'ui-navigation--item-with-children' : '') + (menuItem.active || hasActiveChildren(menuItem) ? ' ui-navigation--item-active' : '') }
          href={ menuItem.link }
          onClick={ (event) => {
            handleClick(event, menuItem);
          } }>
          {menuItem.title}
        </a>

        {menuItem.expanded && menuItem.menuItems && (
          <div className="ui-navigation--item-children">
            {menuItem.menuItems.map((menuItem, index) => {
              return (
                <a key={ index }
                  className='ui-navigation--item'
                  onClick={ (event) => {
                    handleClick(event, menuItem);
                  } }>{menuItem.title}</a>
              );
            })}
          </div>
        )}
      </>
    );
  };

  const handleClick = (event: any, menuItem: IMenuItem) => {
    const tempItems = menuItems.map(item => {
      item.active = item.link === menuItem.link;
      item.expanded = !!(menuItem.menuItems && menuItem.menuItems.length > 0);

      return item;
    });
    setMenuItems(tempItems);

    event.preventDefault();

    props.onNavigate(menuItem);
  }
    ;

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
    <div className={ 'ui-navigation' }>
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
