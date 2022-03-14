import { registerPlugin } from '@capacitor/core';
const SolofoCapacitorSocket = registerPlugin('SolofoCapacitorSocket', {
    web: () => import('./web').then(m => new m.SolofoCapacitorSocketWeb()),
});
export * from './definitions';
export { SolofoCapacitorSocket };
//# sourceMappingURL=index.js.map