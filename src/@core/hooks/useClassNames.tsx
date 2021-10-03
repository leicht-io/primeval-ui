import React from 'react';

export const useClassNames = (baseClass: string, args: any, deps: any[]): string => {
  const [classes, setClasses] = React.useState<string>('');

  React.useEffect(() => {
    let tempClasses: string = `${baseClass} `;

    args.forEach(arg => {
      if (arg[0] !== undefined && arg[0] !== null && arg[0] !== false) {
        tempClasses += ` ${arg[1]}`;
      }
    });

    setClasses(tempClasses.trim());
  }, deps);

  return classes;
};