import { WebPlugin } from '@capacitor/core';

import type { ExamplePlugin, MyPluginPlugin } from './definitions';


export class ExampleWeb extends WebPlugin implements ExamplePlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}

export class MyPluginWeb extends WebPlugin implements MyPluginPlugin {
  constructor() {
    super({
      name: 'myPlugin',
      platforms: ['web']
    });
  }


  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }

  async getMessage(filter: string): Promise<{ results: any[] }> {
    console.log('filter: ', filter);
    return {
      results: [{
        yourMessage: 'hello World!d',
      }]
    };
  }
}

const myPlugin = new MyPluginWeb();

export { myPlugin };
