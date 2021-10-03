import React from 'react';

export const useBodyScrollLock = (lock: boolean, deps: any[]): any => {
  const body: HTMLElement | null = document.querySelector('body');

  React.useEffect(() => {
    if (body) {
      if (lock) {
        body.classList.add('body--disable-scroll');
      } else {
        body.classList.remove('body--disable-scroll');
      }
    }

    return () => {
      if (body) {
        body.classList.remove('body--disable-scroll');
      }
    };
  }, deps);
};