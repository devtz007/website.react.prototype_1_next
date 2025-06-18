export default {
  extends: [
    'stylelint-config-standard-scss', // Use standard SCSS rules
    'stylelint-config-prettier-scss', // Prettier SCSS rules
    'stylelint-prettier/recommended',
  ],
  plugins: [
    'stylelint-scss', // SCSS-specific linting rules
    'stylelint-prettier', // Prettier integration
  ],
  ignoreFiles: [
    '**/*', // Ignore everything
    '!**/*.css', // But allow CSS files
    '!**/*.scss', // And allow SCSS files
  ],
  rules: {
    'prettier/prettier': [
      true, // Enable Prettier
      {
        severity: 'warning', // Make Prettier issues warnings instead of errors
      },
    ],
    'selector-class-pattern': null, // Disable the class name pattern enforcement

    // Disallow empty lines between declarations
    'declaration-empty-line-before': [
      'never',
      {
        ignore: ['after-comment'], // Ignore after comments if needed
      },
    ],

    // Enforce an empty line before each class selector except for the first one
    'rule-empty-line-before': [
      'always',
      {
        except: ['first-nested'], // Allows no empty line before the first nested rule
        ignore: ['after-comment'], // Ignore after comments
      },
    ],
    'no-descending-specificity': null,
  },
  overrides: [
    {
      files: ['**/*.scss'], // Apply only to SCSS files

      rules: {
        'scss/load-no-partial-leading-underscore': null, // Disable leading underscore warning
        'scss/double-slash-comment-whitespace-inside': null, // Ensure space after //
      },
    },
  ],
};
