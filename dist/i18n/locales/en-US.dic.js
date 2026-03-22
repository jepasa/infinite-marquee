/**
 * Dicionário de i18n (en-US)
 *
 * @module InfiniteMarqueeI18nEnUS
 * @description Strings base de fallback para warnings do plugin.
 * @license Proprietária - Todos os direitos reservados
 */
const enUS = {
  warnings: {
    alreadyInitialized: 'InfiniteMarquee: Already initialized, ignoring duplicate call',
    elementsNotFound: 'InfiniteMarquee: Container or list not found',
    invalidDirection: 'InfiniteMarquee: Direction "{direction}" is invalid, using "left"',
    invalidSpeed: 'InfiniteMarquee: Speed "{speed}" is invalid, using 30',
    speedTooHigh: 'InfiniteMarquee: Speed {speed} is too high',
    invalidType: 'InfiniteMarquee: {type} is invalid, using default "{defaultValue}"',
    containerQueryError: 'InfiniteMarquee: Error querying container "{selector}"',
    containerNotFound: 'InfiniteMarquee: Container not found: "{selector}"',
    listQueryError: 'InfiniteMarquee: Error querying list "{selector}"',
    listNotFound: 'InfiniteMarquee: List not found: "{selector}"',
  },
};

if (typeof window !== 'undefined') {
  // Registro em namespace global para consumo pelo loader de i18n no browser.
  const globalWindow = /** @type {any} */ (window);
  globalWindow.InfiniteMarqueeLangLocales = globalWindow.InfiniteMarqueeLangLocales || {};
  globalWindow.InfiniteMarqueeLangLocales['en-US'] = enUS;
  globalWindow.InfiniteMarqueeLangLocales.en = enUS;
}

if (typeof module !== 'undefined' && module.exports) {
  // Export CommonJS para testes/build scripts.
  module.exports = enUS;
}
