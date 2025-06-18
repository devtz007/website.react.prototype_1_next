/** @type {import("prettier").Config} */
export default {
  trailingComma: 'all',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  singleAttributePerLine: false,
  bracketSpacing: true,
  overrides: [
    {
      files: '*.scss',
      options: {
        singleQuote: false, // SCSS typically uses double quotes
        printWidth: 100, // Adjust line length for SCSS
        proseWrap: 'preserve',
      },
    },
  ],
};
