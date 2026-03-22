/**
 * Dicionário de i18n (zh-CN)
 *
 * @module InfiniteMarqueeI18nZhCN
 * @description Strings em chinês simplificado para warnings do plugin.
 * @license Proprietária - Todos os direitos reservados
 */
const zhCN = {
  warnings: {
    alreadyInitialized: 'InfiniteMarquee: 已初始化，忽略重复调用',
    elementsNotFound: 'InfiniteMarquee: 容器或列表未找到',
    invalidDirection: 'InfiniteMarquee: 方向 "{direction}" 无效，使用 "left"',
    invalidSpeed: 'InfiniteMarquee: 速度 "{speed}" 无效，使用 30',
    speedTooHigh: 'InfiniteMarquee: 速度 {speed} 过高',
    invalidType: 'InfiniteMarquee: {type} 无效，使用默认值 "{defaultValue}"',
    containerQueryError: 'InfiniteMarquee: 查询容器时出错 "{selector}"',
    containerNotFound: 'InfiniteMarquee: 容器未找到: "{selector}"',
    listQueryError: 'InfiniteMarquee: 查询列表时出错 "{selector}"',
    listNotFound: 'InfiniteMarquee: 列表未找到: "{selector}"',
  },
};

if (typeof window !== 'undefined') {
  // Registro em namespace global para consumo pelo loader de i18n no browser.
  const globalWindow = /** @type {any} */ (window);
  globalWindow.InfiniteMarqueeLangLocales = globalWindow.InfiniteMarqueeLangLocales || {};
  globalWindow.InfiniteMarqueeLangLocales['zh-CN'] = zhCN;
}

if (typeof module !== 'undefined' && module.exports) {
  // Export CommonJS para testes/build scripts.
  module.exports = zhCN;
}
