import React from 'react';

export const useEventListener = (type: string, callback: (event) => any): any => {
  React.useEffect(() => {
    document.addEventListener(type, (event) => {
      callback(event);
    });

    return () => {
      document.removeEventListener(type, (event) => {
        callback(event);
      });
    };
  }, []);
};