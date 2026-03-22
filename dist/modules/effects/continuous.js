/** @license Proprietária - Todos os direitos reservados */
(function (root, factory) {
    if (typeof module === 'object' && module.exports) {
        const CloningManager = require('../../lib/js/im-cloning-manager.min.js');
        const AnimationEngine = require('../../lib/js/im-animation-engine.min.js');
        module.exports = factory(CloningManager, AnimationEngine);
    }
    else {
        root.IMEffectContinuous = factory(root.IMCloningManager || root.CloningManager, root.IMAnimationEngine);
    }
})(typeof self !== 'undefined' ? self : this, function (CloningManager, AnimationEngine) {
    'use strict';
    function resolveCloningManagerCtor(instance) {
        if (typeof CloningManager === 'function')
            return CloningManager;
        if (typeof window === 'undefined')
            return null;
        return window.IMCloningManager || window.CloningManager || null;
    }
    function resolveAnimationEngineCtor(instance) {
        if (typeof AnimationEngine === 'function')
            return AnimationEngine;
        if (typeof window === 'undefined')
            return null;
        return window.IMAnimationEngine || null;
    }
    function setupRuntime(instance) {
        const CloningManagerCtor = resolveCloningManagerCtor(instance);
        const AnimationEngineCtor = resolveAnimationEngineCtor(instance);
        if (typeof CloningManagerCtor !== 'function') {
            throw new TypeError('Infinite Marquee: CloningManager inválido ou não carregado.');
        }
        if (typeof AnimationEngineCtor !== 'function') {
            throw new TypeError('Infinite Marquee: AnimationEngine inválido ou não carregado.');
        }
        instance.cloningManager = new CloningManagerCtor(instance.container, instance.list, instance.isHorizontal);
        instance.cloningManager.removeClones();
        instance.cloningManager.ensureClones();
        instance._applyTrackLayout();
        instance.animationEngine = new AnimationEngineCtor(instance.config.speed, instance.isHorizontal, instance.isReverse);
        instance.animationEngine.setBaseSize(instance.cloningManager.getBaseSize(), instance.getInterListSpacing());
        instance.animationEngine.setLists(instance.cloningManager.getAllLists());
        return true;
    }
    return {
        name: 'continuous',
        setup(instance) {
            return setupRuntime(instance);
        },
        start(instance) {
            if (!instance || !instance.animationEngine)
                return false;
            instance.animationEngine.start();
            return true;
        },
        stop(instance) {
            if (!instance || !instance.animationEngine)
                return false;
            instance.animationEngine.stop();
            return true;
        },
        pause(instance) {
            if (!instance || !instance.animationEngine)
                return false;
            instance.animationEngine.pause();
            return true;
        },
        resume(instance) {
            if (!instance || !instance.animationEngine)
                return false;
            instance.animationEngine.resume();
            return true;
        },
        resize(instance) {
            if (!instance || !instance.cloningManager || !instance.animationEngine)
                return false;
            instance._applyTrackLayout();
            instance.cloningManager.refresh();
            instance._applyTrackLayout();
            instance.animationEngine.setBaseSize(instance.cloningManager.getBaseSize(), instance.getInterListSpacing());
            instance.animationEngine.setLists(instance.cloningManager.getAllLists());
            return true;
        },
        ensureClones(instance) {
            if (!instance || !instance.cloningManager)
                return false;
            instance.cloningManager.ensureClones();
            return true;
        },
        refreshMetrics(instance) {
            if (!instance || !instance.cloningManager)
                return false;
            instance.cloningManager.refreshMetrics();
            return true;
        },
        destroy(instance) {
            if (!instance)
                return false;
            if (instance.animationEngine) {
                instance.animationEngine.destroy();
                instance.animationEngine = null;
            }
            if (instance.cloningManager) {
                instance.cloningManager.destroy();
                instance.cloningManager = null;
            }
            return true;
        },
    };
});
