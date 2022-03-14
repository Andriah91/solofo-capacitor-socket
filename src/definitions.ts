import type { PluginListenerHandle } from '@capacitor/core';
export declare type socketListnerSuccess = (resultScan: any) => void;
export declare type socketListnerError = (resultScan: any) => void;
export interface SolofoCapacitorSocketPlugin {

  Open(option: SocketOption): void;
  addListener(eventName: 'socketListnerSuccess', listenerFunc: socketListnerSuccess): PluginListenerHandle;
  addListener(eventName: 'socketListnerError', listenerFunc: socketListnerError): PluginListenerHandle;
}

export interface SocketOption{
  host: string,
  port: number
}
