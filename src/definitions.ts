declare module '@capacitor/core' {
  interface PluginRegistry {
    Sceneform: SceneformPlugin;
  }
}

export interface SceneformPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
