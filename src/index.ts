import { registerPlugin } from '@capacitor/core';

import type { SolofoCapacitorSocketPlugin } from './definitions';

const SolofoCapacitorSocket = registerPlugin<SolofoCapacitorSocketPlugin>('SolofoCapacitorSocket', {
  web: () => import('./web').then(m => new m.SolofoCapacitorSocketWeb()),
});

export * from './definitions';
export { SolofoCapacitorSocket };
