/**
 * @file im-config.ts
 *
 * Nome: IMConfig — Configurações Padrão do Infinite Marquee
 *
 * O que é:
 * - Módulo de constantes centralizadas do plugin, exposto via UMD mínimo.
 *
 * Para que serve:
 * - Definir todos os valores padrão usados pelo core, validador e effects.
 * - Ser a única fonte de verdade sobre seletores, direção, velocidade e plugins ativos.
 *
 * Como usar:
 * - Em CommonJS: `const { MARQUEE_CONFIG, MARQUEE_SPEED_LIMITS } = require('./im-config');`
 * - Em browser (UMD): `window.IMConfig.MARQUEE_CONFIG`
 *
 * Notas:
 * - Arquivo sem sufixo `.min.` — é copiado sem minificação pelo build (serve como configuração legível).
 * - Para estender o comportamento padrão, passe um objeto de opções ao construtor `InfiniteMarquee`.
 *   As opções fornecidas têm precedência sobre os valores definidos aqui.
 * - Todos os objetos são `Object.freeze()` — não modifique em runtime.
 *
 * @module IMConfig
 * @version 2.1.0
 * @author Jeferson Padilha (jepasa.com)
 * @license Proprietária - Todos os direitos reservados
 */
(function (root, factory) {
    // UMD mínimo: suporte a CommonJS (Node/build) e browser global.
    if (typeof module === 'object' && module.exports) {
        // CommonJS — consumido pelos testes e pelo pipeline build-ts.js
        module.exports = factory();
    }
    else {
        // Browser global — disponível como `window.IMConfig`
        root.IMConfig = factory();
    }
})(typeof self !== 'undefined' ? self : this, function () {
    'use strict';
    /**
     * Configuração padrão completa do marquee.
     *
     * Todos os campos podem ser sobrescritos pelo objeto de opções passado ao construtor.
     *
     * @type {Readonly<object>}
     *
     * Campos:
     * - containerSelector {string}      — Seletor CSS do elemento container do marquee.
     *                                     O container envolve a lista e define o viewport visível.
     * - listSelector      {string}      — Seletor CSS do elemento de lista dentro do container.
     *                                     É o elemento que será clonado e animado.
     * - direction         {string}      — Direção do movimento: 'left' | 'right' | 'up' | 'down'.
     *                                     'left' e 'right' são horizontais; 'up' e 'down' são verticais.
     * - speed             {number}      — Velocidade em pixels por segundo (padrão: 30 px/s).
     *                                     Limitado ao intervalo definido em MARQUEE_SPEED_LIMITS.
     * - pauseOnHover      {boolean}     — Pausa a animação quando o cursor entra no container.
     * - pauseOnFocus      {boolean}     — Pausa a animação quando um elemento interno recebe foco.
     *                                     Importante para acessibilidade com teclado.
     * - respectReducedMotion {boolean} — Respeita `prefers-reduced-motion`. Quando true, a animação
     *                                     não inicia se o usuário preferir movimento reduzido.
     * - locale            {string}      — Locale para i18n (ex: 'pt-BR'). Se vazio, usa o locale
     *                                     detectado automaticamente a partir de `<html lang>`.
     * - langDir           {string}      — Caminho para o diretório de dicionários de locale.
     *                                     Se vazio, é inferido a partir do caminho do entrypoint.
     * - configUrl         {string}      — URL de configuração remota (reservado para uso futuro).
     * - effect            {string}      — Nome do effect de transição registrado (ex: 'continuous').
     *                                     Deve corresponder a um effect registrado em src/modules/effects/.
     * - plugins           {string[]}    — Lista de plugins a inicializar (ex: ['runtime']).
     *                                     Cada nome deve corresponder a um plugin registrado em src/modules/plugins/.
     */
    const MARQUEE_CONFIG = Object.freeze({
        containerSelector: '.infinite-marquee-container',
        listSelector: '.infinite-marquee-list',
        // Controla o eixo e o sentido do loop de animação.
        direction: 'left',
        // Velocidade em pixels/segundo. Ajuste conforme a densidade de conteúdo.
        speed: 30,
        // Controles de pausa responsivos ao usuário.
        pauseOnHover: true,
        pauseOnFocus: true,
        // Acessibilidade: não animar se o sistema operacional indicar preferência por redução de movimento.
        respectReducedMotion: true,
        // i18n: deixar vazio para detecção automática.
        locale: '',
        langDir: '',
        configUrl: '',
        // Effect e plugins padrão. Ajuste para carregar apenas o que a instância precisa.
        effect: 'continuous',
        plugins: ['runtime'],
    });
    /**
     * Direções de movimento válidas.
     * Usada pelo validador de configuração para rejeitar valores não suportados.
     *
     * @type {Readonly<string[]>}
     */
    const MARQUEE_DIRECTIONS = Object.freeze(['left', 'right', 'up', 'down']);
    /**
     * Effects disponíveis no build atual.
     * Base de comparação do validador — não inclui effects registrados dinamicamente em runtime.
     *
     * @type {Readonly<string[]>}
     */
    const MARQUEE_EFFECT_TYPES = Object.freeze(['continuous']);
    /**
     * Limites de velocidade aceitos pelo core.
     * Valores fora deste intervalo são normalizados pelo validador (clamp).
     *
     * @type {Readonly<{ min: number, max: number }>}
     */
    const MARQUEE_SPEED_LIMITS = Object.freeze({ min: 10, max: 200 });
    // Aliases mantidos para consumidores internos já existentes.
    // Não introduzir novos aliases — preferir as constantes nomeadas acima.
    const DEFAULT_CONFIG = MARQUEE_CONFIG;
    const VALID_DIRECTIONS = MARQUEE_DIRECTIONS;
    const SPEED_LIMITS = MARQUEE_SPEED_LIMITS;
    return Object.freeze({
        MARQUEE_CONFIG,
        MARQUEE_DIRECTIONS,
        MARQUEE_EFFECT_TYPES,
        MARQUEE_SPEED_LIMITS,
        // Aliases
        DEFAULT_CONFIG,
        VALID_DIRECTIONS,
        SPEED_LIMITS,
    });
});
