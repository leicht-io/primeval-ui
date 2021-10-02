import React from 'react';

export const useScroll = (callback: () => void, dep: typeof window): void => {
  React.useEffect(() => {
    dep.addEventListener('scroll', callback);

    return () => {
      dep.removeEventListener('scroll', callback);
    };
  }, [dep]);
};