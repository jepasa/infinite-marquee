/**
 * Dicionário de i18n (de-DE)
 *
 * @module InfiniteMarqueeI18nDeDE
 * @description Strings em alemão para warnings do plugin.
 * @license Proprietária - Todos os direitos reservados
 */
const deDE = {
  warnings: {
    alreadyInitialized: 'InfiniteMarquee: Bereits initialisiert, doppelter Aufruf wird ignoriert',
    elementsNotFound: 'InfiniteMarquee: Container oder Liste nicht gefunden',
    invalidDirection: 'InfiniteMarquee: Richtung "{direction}" ungültig, verwende "left"',
    invalidSpeed: 'InfiniteMarquee: Geschwindigkeit "{speed}" ungültig, verwende 30',
    speedTooHigh: 'InfiniteMarquee: Geschwindigkeit {speed} zu hoch',
    invalidType: 'InfiniteMarquee: {type} ungültig, verwende Standardwert "{defaultValue}"',
    containerQueryError: 'InfiniteMarquee: Fehler beim Abfragen des Containers "{selector}"',
    containerNotFound: 'InfiniteMarquee: Container nicht gefunden: "{selector}"',
    listQueryError: 'InfiniteMarquee: Fehler beim Abfragen der Liste "{selector}"',
    listNotFound: 'InfiniteMarquee: Liste nicht gefunden: "{selector}"',
  },
};

if (typeof window !== 'undefined') {
  // Registro em namespace global para consumo pelo loader de i18n no browser.
  const globalWindow = /** @type {any} */ (window);
  globalWindow.InfiniteMarqueeLangLocales = globalWindow.InfiniteMarqueeLangLocales || {};
  globalWindow.InfiniteMarqueeLangLocales['de-DE'] = deDE;
}

if (typeof module !== 'undefined' && module.exports) {
  // Export CommonJS para testes/build scripts.
  module.exports = deDE;
}
