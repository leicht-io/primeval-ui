import React from 'react';
import {ITab, Types} from './types';
import './tabs.scss';
import {Link, useLocation} from 'react-router-dom';
export const UITabs = (types: Types): React.ReactElement => {
  const location = useLocation();

  const tabsWrapper: React.RefObject<HTMLDivElement> = React.useRef(null);
  const [selectedTab, setSelectedTab] = React.useState<string>();

  React.useEffect(() => {
    const paths: string[] = location.pathname.split('/');
    const selectedTab: string = paths[paths.length - 1];
    setSelectedTab(selectedTab);
  }, [location]);

  return (
    <div className="tabs-wrapper">
      <div
        className={ 'tabs' }
        ref={ tabsWrapper }>
        {types.tabs.map((tab: ITab, index: number) => {
          return (
            <div
              className={ `tab ${selectedTab === tab.id ? 'tab-selected' : ''}` }
              key={ index }>
              <Link to={ `${types.linkPrefix}/${tab.id}` }>
                <div className={ 'ui-tab--icon' }>
                  {tab.icon && (tab.icon)}
                </div>

                <span className={ 'ui-tab--text' }>{tab.title}</span>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
