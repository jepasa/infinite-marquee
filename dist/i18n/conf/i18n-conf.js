/** @license Proprietária - Todos os direitos reservados */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.ICI18nConf = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  const DEFAULT_LOCALE = 'en-US';
  const GLOBAL_KEY = 'InfiniteMarqueeLangLocales';
  const DICTIONARY_SUFFIX = '.dic.js';
  const LOCALES_DIR = 'locales';
  const SHORT_TO_CANONICAL = Object.freeze({});

  const ROOT_REF =
    typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : null;

  return {
    DEFAULT_LOCALE: DEFAULT_LOCALE,
    GLOBAL_KEY: GLOBAL_KEY,
    DICTIONARY_SUFFIX: DICTIONARY_SUFFIX,
    LOCALES_DIR: LOCALES_DIR,
    SHORT_TO_CANONICAL: SHORT_TO_CANONICAL,
    ROOT_REF: ROOT_REF,
  };
});
