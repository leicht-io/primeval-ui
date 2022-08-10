import React from 'react';
import './UIScrollProgress.scss';
import {useResizeObserver, useScroll} from '../../@core';

export const UIScrollProgress = React.memo((): React.ReactElement => {
  const [value, setValue] = React.useState<number>(0);

  React.useEffect(() => {
    calculateProgress();
  }, []);

  useScroll(() => {
    calculateProgress();
  }, window);

  useResizeObserver('.page-container', () => {
    calculateProgress();
  });

  const calculateProgress = (): void => {
    const scrollOffsetInPercentage = ((document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100);

    if(!isNaN(scrollOffsetInPercentage)) {
      setValue(scrollOffsetInPercentage);
    }
  };

  return <progress className="ui-scroll-progress" max={ 100 } value={ value } />;
});
