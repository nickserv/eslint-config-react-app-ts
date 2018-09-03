# `eslint-config-react-app-ts` [![npm version](https://badge.fury.io/js/eslint-config-react-app-ts.svg)](https://badge.fury.io/js/eslint-config-react-app-ts)

This package includes the shareable ESLint configuration used by [Create React App TypeScript](https://github.com/wmonk/create-react-app-typescript).<br>
Please refer to its documentation:

- [Getting Started](https://github.com/wmonk/create-react-app-typescript) – How to create a new app.
- [User Guide](https://github.com/wmonk/create-react-app-typescript/blob/master/template/README.md) – How to develop apps bootstrapped with Create React App TypeScript.

## Usage in Create React App Projects

The easiest way to use this configuration is with [Create React App TypeScript](https://github.com/wmonk/create-react-app-typescript), which includes it by default.

**You don’t need to install it separately in Create React App TypeScript projects.**

## Usage Outside of Create React App TypeScript

If you want to use this ESLint configuration in a project not built with Create React App TypeScript, you can install it with following steps.

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

That's it! You can override the settings from `eslint-config-react-app-ts` by editing the `.eslintrc` file. Learn more about [configuring ESLint](http://eslint.org/docs/user-guide/configuring) on the ESLint website.

## [Accessibility Checks](https://github.com/facebook/create-react-app/tree/master/packages/eslint-config-react-app#accessibility-checks)
