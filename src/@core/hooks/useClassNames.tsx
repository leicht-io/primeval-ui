export const useClassNames = (baseClass: string, args: any): string => {
  let tempClasses: string = `${baseClass} `;

  args.forEach(arg => {
    if (arg[0] !== undefined && arg[0] !== null && arg[0] !== false) {
      tempClasses += ` ${arg[1]}`;
    }
  });

  return tempClasses.trim();
};