module.exports = {
  extends: "eslint-config-react-app",
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parser: "typescript-eslint-parser",
      rules: {
        "no-array-constructor": "off",
        "no-multi-str": "off",
        "no-restricted-globals": "off",
        "no-undef": "off",
        "no-unused-vars": "off"
      }
    }
  ]
};
