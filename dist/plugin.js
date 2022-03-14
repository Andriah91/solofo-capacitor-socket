var capacitorSolofoCapacitorSocket = (function (exports, core) {
    'use strict';

    const SolofoCapacitorSocket = core.registerPlugin('SolofoCapacitorSocket', {
        web: () => Promise.resolve().then(function () { return web; }).then(m => new m.SolofoCapacitorSocketWeb()),
    });

    class SolofoCapacitorSocketWeb extends core.WebPlugin {
        open(option) {
            console.log(option);
            throw new Error('Method not implemented.');
        }
        close() {
            throw new Error('Method not implemented.');
        }
    }

    var web = /*#__PURE__*/Object.freeze({
        __proto__: null,
        SolofoCapacitorSocketWeb: SolofoCapacitorSocketWeb
    });

    exports.SolofoCapacitorSocket = SolofoCapacitorSocket;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
