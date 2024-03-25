import './UIMenuNew.scss';
import React from 'react';
import 'boxicons';

export const UIMenuNew = (props) => {
  const [toggle, setToggle] = React.useState<boolean>(true);
  const [darkMode, setDarkMode] = React.useState<boolean>(false);
  const [childVisible, setChildVisible] = React.useState<string>(false);

  return (
    <nav className={ 'sidebar' + (toggle ? '' : ' close') }>
      <header>
        <div className="image-text">
          <span className="image">
            {props.logo}
          </span>

          <div className="text logo-text">
            <span className="name">Codinglab</span>
            <span className="profession">Web developer</span>
          </div>
        </div>

        <i className="bx bx-chevron-right toggle"
          onClick={ () => {
            setToggle(!toggle);
          } }
        ></i>
      </header>

      <div className="menu-bar">
        <div className="menu">
          {/* <li className="search-box">
            <i className="bx bx-search icon"></i>
            <input type="text" placeholder="Search..." />
          </li>*/}

          <ul className="menu-links">
            {props.menuItems.map((menuItem, index) => {
              return (
                <li
                  onClick={ () => {
                    const hasChildren = menuItem.menuItems && menuItem.menuItems.length> 0;

                    if(!hasChildren) {
                      props.onNavigate(menuItem);
                    } else {
                      setChildVisible(menuItem.link);
                    }
                  } }
                  key={ index }
                  className={ `nav-link ${menuItem.menuItems && menuItem.menuItems.length ? 'nav-link--with-children' : ''}` }>
                  <a href="#">
                    <span>
                      <i className={ `bx bx-${menuItem.icon} icon` } />
                      <span className="text nav-text">
                        {menuItem.title}
                      </span>
                    </span>

                    {(menuItem.menuItems && menuItem.menuItems.length > 0) && (
                      <>
                        <i className={ 'bx bx-chevron-down icon' } />
                      </>
                    )}
                  </a>

                  <div>
                    {menuItem.menuItems && childVisible === menuItem.link && menuItem.menuItems.map((subMenu, index) => {
                      return (
                        <span
                          key={ index }
                          className="text nav-text">
                          {subMenu.title}
                        </span>
                      );
                    })}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="bottom-content">
          {/* <li className="">
            <a href="#">
              <i className="bx bx-log-out icon"></i>
              <span className="text nav-text">Logout</span>
            </a>
          </li> */}

          <li className="mode">
            <div className="sun-moon">
              <i className="bx bx-moon icon moon"></i>
              <i className="bx bx-sun icon sun"></i>
            </div>
            <span className="mode-text text">{darkMode ? 'Light Mode' : 'Dark Mode'}</span>

            <div
              onClick={ () => {
                setDarkMode(!darkMode);
                document.body.classList.toggle('dark');
              } }
              className="toggle-switch">
              <span className="switch"></span>
            </div>
          </li>
        </div>
      </div>
    </nav>
  );
};