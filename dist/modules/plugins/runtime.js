/** @license Proprietária - Todos os direitos reservados */
(function (root, factory) {
    if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    }
    else {
        root.IMPluginRuntime = factory();
    }
})(typeof self !== 'undefined' ? self : this, function () {
    'use strict';
    return {
        name: 'runtime',
        setup(instance) {
            if (!instance || !instance.container)
                return false;
            instance.listeners = {
                mouseenter: function () {
                    instance.pause();
                },
                mouseleave: function () {
                    instance.resume();
                },
                focusin: function () {
                    instance.pause();
                },
                focusout: function () {
                    instance.resume();
                },
                resize: function () {
                    instance._invokeEffectHook('resize');
                },
                visibilitychange: function () {
                    if (document.hidden) {
                        instance.stop();
                    }
                    else if (instance.inView &&
                        instance.animationEngine &&
                        !instance.animationEngine.isPaused()) {
                        instance.start();
                    }
                },
                beforeunload: function () {
                    instance.stop();
                },
            };
            if (instance.config.pauseOnHover) {
                instance.container.addEventListener('mouseenter', instance.listeners.mouseenter);
                instance.container.addEventListener('mouseleave', instance.listeners.mouseleave);
            }
            if (instance.config.pauseOnFocus) {
                instance.container.addEventListener('focusin', instance.listeners.focusin);
                instance.container.addEventListener('focusout', instance.listeners.focusout);
            }
            window.addEventListener('resize', instance.listeners.resize);
            document.addEventListener('visibilitychange', instance.listeners.visibilitychange);
            window.addEventListener('beforeunload', instance.listeners.beforeunload);
            if ('IntersectionObserver' in window) {
                instance.intersectionObserver = new IntersectionObserver(function (entries) {
                    instance.inView = !!entries[0] && entries[0].isIntersecting;
                    if (instance.inView &&
                        instance.animationEngine &&
                        !instance.animationEngine.isPaused() &&
                        !document.hidden) {
                        instance.start();
                    }
                    else {
                        instance.stop();
                    }
                }, { root: null, threshold: 0.01 });
                instance.intersectionObserver.observe(instance.container);
            }
            return true;
        },
        destroy(instance) {
            if (!instance)
                return false;
            if (instance.listeners && instance.container) {
                if (instance.config.pauseOnHover) {
                    instance.container.removeEventListener('mouseenter', instance.listeners.mouseenter);
                    instance.container.removeEventListener('mouseleave', instance.listeners.mouseleave);
                }
                if (instance.config.pauseOnFocus) {
                    instance.container.removeEventListener('focusin', instance.listeners.focusin);
                    instance.container.removeEventListener('focusout', instance.listeners.focusout);
                }
                window.removeEventListener('resize', instance.listeners.resize);
                document.removeEventListener('visibilitychange', instance.listeners.visibilitychange);
                window.removeEventListener('beforeunload', instance.listeners.beforeunload);
            }
            if (instance.intersectionObserver) {
                instance.intersectionObserver.disconnect();
                instance.intersectionObserver = null;
            }
            instance.listeners = null;
            return true;
        },
    };
});
