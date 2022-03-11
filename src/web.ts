import { WebPlugin } from '@capacitor/core';

import type { SolofoCapacitorSocketPlugin } from './definitions';

export class SolofoCapacitorSocketWeb extends WebPlugin implements SolofoCapacitorSocketPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
