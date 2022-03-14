import { WebPlugin } from '@capacitor/core';

import type { SocketOption, SolofoCapacitorSocketPlugin } from './definitions';

export class SolofoCapacitorSocketWeb extends WebPlugin implements SolofoCapacitorSocketPlugin {
  open(option: SocketOption): void {
    console.log(option)
    throw new Error('Method not implemented.');
  }
  close(): void {
    throw new Error('Method not implemented.');
  }
}
