import React from 'react';
import {ITab, Types} from './types';
import './tabs.scss';
import {Link, useLocation} from 'react-router-dom';
// import { useWindowSize } from '../../hooks';

export const UITabs = (types: Types): React.ReactElement => {
  const location = useLocation();
  // const [width] = useWindowSize();

  const tabsWrapper: React.RefObject<HTMLDivElement> = React.useRef(null);
  const [selectedTab, setSelectedTab] = React.useState<string>();

  const [overflow, setOverflow] = React.useState<boolean>(false);

  /* React.useEffect(() => {
      if (tabsWrapper && tabsWrapper.current && tabsWrapper.current.scrollWidth > width) {
        if (!overflow) {
          setOverflow(true);
        }
      } else {
        if (overflow) {
          setOverflow(false);
        }
      }
    }, [width]); */

  React.useEffect(() => {
    const paths: string[] = location.pathname.split('/');
    const selectedTab: string = paths[paths.length - 1];
    setSelectedTab(selectedTab);
  }, [location]);

  return (
    <div className="tabs-wrapper">
      <div
        className={ `tabs ${overflow ? 'tabs--overflow' : ''}` }
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

                {tab.title}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
