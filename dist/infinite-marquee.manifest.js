// @ts-nocheck
(function (root) {
  root.__IM_MODULE_MANIFEST__ = {
  "version": "2.1.0",
  "modules": {
    "required": [
      "lib/js/im-config.js",
      "i18n/conf/i18n-conf.js",
      "i18n/lib/i18n-helpers.min.js",
      "i18n/lib/i18n-core.min.js",
      "i18n/lib/i18n-entry.min.js",
      "i18n/index.min.js"
    ],
    "effects": {
      "continuous": "modules/effects/continuous.js"
    },
    "plugins": {
      "runtime": "modules/plugins/runtime.js"
    },
    "registries": [
      "modules/effects/index.js",
      "modules/plugins/index.js"
    ],
    "shared": [
      "lib/js/im-i18n.min.js",
      "lib/js/im-utilities.min.js",
      "lib/js/im-options-validator.min.js",
      "lib/js/im-cloning-manager.min.js",
      "lib/js/im-animation-engine.min.js",
      "lib/js/im-core.min.js"
    ]
  }
};
})(typeof self !== 'undefined' ? self : this);
