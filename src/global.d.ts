// src/global.d.ts
/* Eslint */
//declare module '@next/eslint-plugin-next';

/* Color */
//type RGBColor = `rgb(${number}, ${number}, ${number})`;

/* File extensions */
declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.svg' {
  const content: string;
  export default content;
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
