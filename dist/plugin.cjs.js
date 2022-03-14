'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

const SolofoCapacitorSocket = core.registerPlugin('SolofoCapacitorSocket', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.SolofoCapacitorSocketWeb()),
});

class SolofoCapacitorSocketWeb extends core.WebPlugin {
    Open(option) {
        console.log(option);
    }
}

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    SolofoCapacitorSocketWeb: SolofoCapacitorSocketWeb
});

exports.SolofoCapacitorSocket = SolofoCapacitorSocket;
//# sourceMappingURL=plugin.cjs.js.map
