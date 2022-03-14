import { WebPlugin } from '@capacitor/core';

import type { SocketOption, SolofoCapacitorSocketPlugin } from './definitions';

export class SolofoCapacitorSocketWeb extends WebPlugin implements SolofoCapacitorSocketPlugin {

  Open(option: SocketOption){
    console.log(option)
  }
}
