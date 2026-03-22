/**
 * Dicionário de i18n (es-ES)
 *
 * @module InfiniteMarqueeI18nEsES
 * @description Strings em espanhol para warnings do plugin.
 * @license Proprietária - Todos os direitos reservados
 */
const esES = {
  warnings: {
    alreadyInitialized: 'InfiniteMarquee: Ya inicializado, ignorando llamada duplicada',
    elementsNotFound: 'InfiniteMarquee: Contenedor o lista no encontrados',
    invalidDirection: 'InfiniteMarquee: Dirección "{direction}" inválida, usando "left"',
    invalidSpeed: 'InfiniteMarquee: Velocidad "{speed}" inválida, usando 30',
    speedTooHigh: 'InfiniteMarquee: Velocidad {speed} demasiado alta',
    invalidType: 'InfiniteMarquee: {type} inválido, usando predeterminado "{defaultValue}"',
    containerQueryError: 'InfiniteMarquee: Error al buscar contenedor "{selector}"',
    containerNotFound: 'InfiniteMarquee: Contenedor no encontrado: "{selector}"',
    listQueryError: 'InfiniteMarquee: Error al buscar lista "{selector}"',
    listNotFound: 'InfiniteMarquee: Lista no encontrada: "{selector}"',
  },
};

if (typeof window !== 'undefined') {
  // Registro em namespace global para consumo pelo loader de i18n no browser.
  const globalWindow = /** @type {any} */ (window);
  globalWindow.InfiniteMarqueeLangLocales = globalWindow.InfiniteMarqueeLangLocales || {};
  globalWindow.InfiniteMarqueeLangLocales['es-ES'] = esES;
}

if (typeof module !== 'undefined' && module.exports) {
  // Export CommonJS para testes/build scripts.
  module.exports = esES;
}
