import type { PluginListenerHandle } from '@capacitor/core';
export declare type socketOpenedListener = (resultScan: any) => void;
export interface SolofoCapacitorSocketPlugin {

  Open(option: SocketOption): void;
  addListener(eventName: 'socketListnerSucces', listenerFunc: socketOpenedListener): PluginListenerHandle;
  addListener(eventName: 'socketListnerError', listenerFunc: socketOpenedListener): PluginListenerHandle;
}

export interface SocketOption{
  host: string,
  port: number
}
