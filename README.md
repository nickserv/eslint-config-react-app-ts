# `eslint-config-react-app-ts` [![npm version](https://badge.fury.io/js/eslint-config-react-app-ts.svg)](https://badge.fury.io/js/eslint-config-react-app-ts)

This package extends [`eslint-config-react-app`](https://github.com/facebook/create-react-app/tree/master/packages/eslint-config-react-app) for [TypeScript](https://www.typescriptlang.org/) files by parsing them with [`typescript-eslint-parser`](https://github.com/eslint/typescript-eslint-parser) and preventing conflicts with the TypeScript compiler. It can also be used as a less opinionated and easier to learn alternative to [TSLint](https://github.com/palantir/tslint)'s recommended, [React](https://github.com/palantir/tslint-react), and [Prettier](https://www.npmjs.com/package/tslint-config-prettier) configs, without restrictions on type usage. Linter results for JS files are identitcal to `eslint-config-react-app`.

## Development Status

The main goal is to develop a more user friendly linter config for [Create React App TypeScript](https://github.com/wmonk/create-react-app-typescript) (see [#388](https://github.com/wmonk/create-react-app-typescript/pull/388)), but it should work in any TypeScript React app. If you experience a conflict between an ESLint rule and your TypeScript compiler settings, please [report an issue](https://github.com/nickmccurdy/eslint-config-react-app-ts/issues/new) with your configs.

## Usage

First, install this package, ESLint and the necessary plugins.

```sh
npm install --save-dev eslint-config-react-app-ts typescript typescript-eslint-parser eslint-config-react-app babel-eslint@^7.2.3 eslint@^4.1.1 eslint-plugin-flowtype@^2.34.1 eslint-plugin-import@^2.6.0 eslint-plugin-jsx-a11y@^5.1.1 eslint-plugin-react@^7.1.0
```

Then create a file named `.eslintrc` with following contents in the root folder of your project:

```js
{
  "extends": "react-app-ts"
}
```

You also need to make sure your usage of ESLint includes TypeScript files. For example, you can run `eslint . --ext js,jsx,ts,tsx` at the command line.

You can override the settings from `eslint-config-react-app-ts` by editing the `.eslintrc` file. Learn more about [configuring ESLint](http://eslint.org/docs/user-guide/configuring) on the ESLint website.

## [Accessibility Checks](https://github.com/facebook/create-react-app/tree/master/packages/eslint-config-react-app#accessibility-checks)
