import {RefObject, useCallback, useLayoutEffect, useState} from 'react';

export interface ResizeObserverEntry {
  target: HTMLElement;
  contentRect: DOMRectReadOnly;
}

export const useResizeObserver = (ref: RefObject<HTMLElement> | string, callback?: (entry: DOMRectReadOnly) => void): void => {
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();

  const handleResize = useCallback(
    (entries: ResizeObserverEntry[]) => {
      if (!Array.isArray(entries)) {
        return;
      }

      const entry = entries[0];
      setWidth(entry.contentRect.width);
      setHeight(entry.contentRect.height);

      if (callback) {
        callback(entry.contentRect);
      }
    },
    [callback]
  );

  useLayoutEffect(() => {
    const res = typeof ref === 'string' ? document.querySelector(ref) : ref.current;

    if (!res) {
      return;
    }

    let RO = new ResizeObserver((entries: ResizeObserverEntry[]) => handleResize(entries));
    RO.observe(res);

    return () => {
      RO.disconnect();
      RO = null;
    };
  }, [ref]);

  return [width, height];
};
