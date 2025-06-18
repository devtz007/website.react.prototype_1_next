//src/global.d.ts
declare module '@next/eslint-plugin-next';

// types
type RGBColor = `rgb(${number}, ${number}, ${number})`;

declare module '@canvasjs/react-charts';

/**~~~~~file extensions~~~~~**/
declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.jpg' {
  const value: string;
  export default value;
}

declare module '*.jpeg' {
  const value: string;
  export default value;
}

declare module '*.gif' {
  const value: string;
  export default value;
}
