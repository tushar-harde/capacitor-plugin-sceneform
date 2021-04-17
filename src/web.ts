import { WebPlugin } from '@capacitor/core';
import { SceneformPlugin } from './definitions';

export class SceneformWeb extends WebPlugin implements SceneformPlugin {
  constructor() {
    super({
      name: 'Sceneform',
      platforms: ['web'],
    });
  }

  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}

const Sceneform = new SceneformWeb();

export { Sceneform };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(Sceneform);
