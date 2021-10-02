import {RefObject, useCallback, useLayoutEffect, useState} from 'react';

export interface ResizeObserverEntry {
  target: HTMLElement;
  contentRect: DOMRectReadOnly;
}

export const useResizeObserver = (ref: RefObject<HTMLElement> | string, callback?: (entry: DOMRectReadOnly) => void): number[] => {
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);

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
    }, [callback]);

  useLayoutEffect(() => {
    const res = typeof ref === 'string' ? document.querySelector(ref) : ref.current;

    if (!res) {
      return;
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    let resizeObserver: ResizeObserver = new ResizeObserver((entries: ResizeObserverEntry[]) => {
      handleResize(entries);
    });
    resizeObserver.observe(res);

    return () => {
      resizeObserver.disconnect();
      (resizeObserver as any) = null;
    };
  }, [ref]);

  return [width, height];
};
