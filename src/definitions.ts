import type { PluginListenerHandle } from '@capacitor/core';
export declare type SocketSuccessListner = (NMEA_GGA: NMEA_GGA) => void;
export declare type SocketErrorListner = (error: any) => void;
export interface SolofoCapacitorSocketPlugin {

  open(option: SocketOption): void;
  close(): void;
  addListener(eventName: 'SocketSuccessListner', listenerFunc: SocketSuccessListner): Promise<PluginListenerHandle>;
  addListener(eventName: 'SocketErrorListner', listenerFunc: SocketErrorListner): Promise<PluginListenerHandle>;
}

export interface SocketOption{
  host: string,
  port: number
}

export interface NMEA_GGA{
  Z_EGM_GGA: number,
  N_EGM_GGA: number,
  POS: number
}

