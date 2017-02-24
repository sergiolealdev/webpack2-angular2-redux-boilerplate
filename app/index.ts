import 'reflect-metadata';
import 'core-js/es7/reflect';
import 'zone.js';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module.ts';

platformBrowserDynamic().bootstrapModule(AppModule);

