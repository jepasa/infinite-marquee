/**
 * Dicionário de i18n (pt-BR)
 *
 * @module InfiniteMarqueeI18nPtBR
 * @description Strings em português para warnings do plugin.
 * @license Proprietária - Todos os direitos reservados
 */
const ptBR = {
  warnings: {
    alreadyInitialized: 'InfiniteMarquee: Já inicializado, ignorando chamada duplicada',
    elementsNotFound: 'InfiniteMarquee: Container ou lista não encontrados',
    invalidDirection: 'InfiniteMarquee: Direção "{direction}" inválida, usando "left"',
    invalidSpeed: 'InfiniteMarquee: Velocidade "{speed}" inválida, usando 30',
    speedTooHigh: 'InfiniteMarquee: Velocidade {speed} muito alta',
    invalidType: 'InfiniteMarquee: {type} inválido, usando padrão "{defaultValue}"',
    containerQueryError: 'InfiniteMarquee: Erro ao buscar container "{selector}"',
    containerNotFound: 'InfiniteMarquee: Container não encontrado: "{selector}"',
    listQueryError: 'InfiniteMarquee: Erro ao buscar lista "{selector}"',
    listNotFound: 'InfiniteMarquee: Lista não encontrada: "{selector}"',
  },
};

if (typeof window !== 'undefined') {
  // Registro em namespace global para consumo pelo loader de i18n no browser.
  const globalWindow = /** @type {any} */ (window);
  globalWindow.InfiniteMarqueeLangLocales = globalWindow.InfiniteMarqueeLangLocales || {};
  globalWindow.InfiniteMarqueeLangLocales['pt-BR'] = ptBR;
}

if (typeof module !== 'undefined' && module.exports) {
  // Export CommonJS para testes/build scripts.
  module.exports = ptBR;
}
