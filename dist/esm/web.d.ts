import { WebPlugin } from '@capacitor/core';
import type { SocketOption, SolofoCapacitorSocketPlugin } from './definitions';
export declare class SolofoCapacitorSocketWeb extends WebPlugin implements SolofoCapacitorSocketPlugin {
    open(option: SocketOption): void;
    close(): void;
}
