const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");

module.exports = {
      // { preset: default } говорит о том, что нужно использовать
    // стандартные настройки минификации
  plugins: [autoprefixer, cssnano({ preset: "default" })],
};