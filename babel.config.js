module.exports = function (api) {
  api.cache(true);

  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],

    plugins: [
      [
        "module-resolver",
        {
          root: ["./"],

          alias: {
            "@": "./", // To resolve files with '@'
            "tailwind.config": "./tailwind.config.js", // Make sure this alias works
          },
        },
      ],
    ],
  };
};
