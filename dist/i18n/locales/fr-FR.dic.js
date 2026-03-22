/**
 * Dicionário de i18n (fr-FR)
 *
 * @module InfiniteMarqueeI18nFrFR
 * @description Strings em francês para warnings do plugin.
 * @license Proprietária - Todos os direitos reservados
 */
const frFR = {
  warnings: {
    alreadyInitialized: 'InfiniteMarquee: Déjà initialisé, appel en double ignoré',
    elementsNotFound: 'InfiniteMarquee: Conteneur ou liste introuvable',
    invalidDirection: 'InfiniteMarquee: Direction "{direction}" invalide, utilisation de "left"',
    invalidSpeed: 'InfiniteMarquee: Vitesse "{speed}" invalide, utilisation de 30',
    speedTooHigh: 'InfiniteMarquee: Vitesse {speed} trop élevée',
    invalidType:
      'InfiniteMarquee: {type} invalide, utilisation de la valeur par défaut "{defaultValue}"',
    containerQueryError: 'InfiniteMarquee: Erreur lors de la recherche du conteneur "{selector}"',
    containerNotFound: 'InfiniteMarquee: Conteneur introuvable: "{selector}"',
    listQueryError: 'InfiniteMarquee: Erreur lors de la recherche de la liste "{selector}"',
    listNotFound: 'InfiniteMarquee: Liste introuvable: "{selector}"',
  },
};

if (typeof window !== 'undefined') {
  // Registro em namespace global para consumo pelo loader de i18n no browser.
  const globalWindow = /** @type {any} */ (window);
  globalWindow.InfiniteMarqueeLangLocales = globalWindow.InfiniteMarqueeLangLocales || {};
  globalWindow.InfiniteMarqueeLangLocales['fr-FR'] = frFR;
}

if (typeof module !== 'undefined' && module.exports) {
  // Export CommonJS para testes/build scripts.
  module.exports = frFR;
}
