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
    const documentElement: HTMLElement = document.documentElement;
    const documentBody: HTMLElement = document.body;
    const scrollTop: string = 'scrollTop';
    const scrollHeight: string = 'scrollHeight';
    const value = (documentElement[scrollTop] || documentBody[scrollTop]) / ((documentElement[scrollHeight] || documentBody[scrollHeight]) - documentElement.clientHeight) * 100;

    if(!isNaN(value)) {
      setValue(value);
    }
  };

  return <progress className="ui-scroll-progress" max={ 100 } value={ value } />;
});
