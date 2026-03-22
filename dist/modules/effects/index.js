/** @license Proprietária - Todos os direitos reservados */
(function (root, factory) {
    if (typeof module === 'object' && module.exports) {
        const builtinContinuous = require('./continuous.js');
        module.exports = factory([builtinContinuous]);
    }
    else {
        root.InfiniteMarqueeEffects = factory([root.IMEffectContinuous]);
    }
})(typeof self !== 'undefined' ? self : this, function (builtinModules) {
    'use strict';
    var registry = Object.create(null);
    function normalizeName(name) {
        return typeof name === 'string' ? name.trim() : '';
    }
    function register(name, effectModule) {
        var normalizedName = normalizeName(name);
        if (!normalizedName) {
            throw new TypeError('Infinite Marquee: nome de effect inválido.');
        }
        registry[normalizedName] = effectModule;
        return api;
    }
    function get(name) {
        var normalizedName = normalizeName(name);
        return normalizedName ? registry[normalizedName] : undefined;
    }
    function has(name) {
        return !!get(name);
    }
    function list() {
        return Object.keys(registry).sort();
    }
    function all() {
        return Object.assign({}, registry);
    }
    var api = {
        register: register,
        get: get,
        has: has,
        list: list,
        all: all,
    };
    (Array.isArray(builtinModules) ? builtinModules : []).forEach(function (definition) {
        if (!definition || typeof definition !== 'object')
            return;
        var name = typeof definition.name === 'string' ? definition.name.trim() : '';
        if (!name)
            return;
        register(name, definition);
    });
    return api;
});
