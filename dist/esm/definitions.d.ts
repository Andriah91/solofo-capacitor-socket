import type { PluginListenerHandle } from '@capacitor/core';
export declare type socketOpenedListener = (resultScan: any) => void;
export interface SolofoCapacitorSocketPlugin {
    Open(option: SocketOption): void;
    addListener(eventName: 'socketListner', listenerFunc: socketOpenedListener): Promise<PluginListenerHandle> & PluginListenerHandle;
}
export interface SocketOption {
    host: string;
    port: number;
}
