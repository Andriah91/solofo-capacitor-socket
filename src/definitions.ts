import type { PluginListenerHandle } from '@capacitor/core';
export declare type SocketSuccessListner = (resultScan: any) => void;
export declare type SocketErrorListner = (resultScan: any) => void;
export interface SolofoCapacitorSocketPlugin {

  Open(option: SocketOption): void;
  addListener(eventName: 'SocketSuccessListner', listenerFunc: SocketSuccessListner): Promise<PluginListenerHandle>;
  addListener(eventName: 'SocketErrorListner', listenerFunc: SocketErrorListner): Promise<PluginListenerHandle>;
  addListener(eventName: 'SocketOpnedListner', listenerFunc: SocketErrorListner): Promise<PluginListenerHandle>;
}

export interface SocketOption{
  host: string,
  port: number
}
