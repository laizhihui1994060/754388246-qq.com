module.exports = {
  root: true,
  parserOptions: {
    parser: "babel-eslint",
  },
  env: {
    node: true,
  },
  extends: ["plugin:vue/essential", "@vue/prettier"],
  rules: {
    "no-console": "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    // 'no-return-await': 'off',
    // 'no-return-assign': 'off',
    // 'no-trailing-spaces': 'off',
    // 'padded-blocks': 'off',
    // 'vue/max-attributes-per-line': 'off',
    "vue/html-self-closing": [
      "error",
      {
        html: {
          void: "any",
          normal: "never",
        },
      },
    ],
    //强制驼峰法命名
    camelcase: [
      0,
      {
        properties: "always",
      },
    ],
    // 强制在子类构造函数中用super()调用父类构造函数，TypeScrip的编译器也会提示
    "constructor-super": 2,
  },
};
