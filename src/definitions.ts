export interface SolofoCapacitorSocketPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
