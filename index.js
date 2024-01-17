/// <reference path="index.d.ts"/>

const cssnano = require("cssnano");
const postcssGlobalImport = require("postcss-global-import");
const postcssImport = require("postcss-import");
const postcssPresetEnv = require("postcss-preset-env");
const postcssMixin = require("postcss-mixins");
const globalData = require("@csstools/postcss-global-data");

const getPresetEnvOptions = ({ preserveMediaQueries } = {}) => ({
  autoprefixer: {
    flexbox: "no-2009",
  },
  features: {
    "cascade-layers": false,
    "custom-media-queries": { preserve: preserveMediaQueries },
    "custom-properties": true,
    "gap-properties": true,
    "nesting-rules": true,
  },
  stage: 1,
});

/** @type {import("@tiwariav/postcss-config").getConfig} */
const getConfig = (
  env = "production",
  { globalDataOptions, mixinOptions, presetEnvOptions } = {}
) => {
  const config = {
    plugins: [
      postcssGlobalImport(),
      postcssImport(),
      postcssMixin(mixinOptions),
      postcssPresetEnv({ ...getPresetEnvOptions(presetEnvOptions), env }),
      cssnano({ preset: "advanced" }),
    ],
    sourceMap: env === "development",
  };
  if (globalDataOptions) {
    config.plugins.splice(0, 0, globalData(globalDataOptions));
  }
  return config;
};

module.exports = { getConfig, getPresetEnvOptions };
