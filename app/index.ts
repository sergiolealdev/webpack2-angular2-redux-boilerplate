import 'reflect-metadata';
import {enableProdMode} from '@angular/core';
import 'core-js/es7/reflect';
import 'zone.js';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

declare const __PRODUCTION__:boolean;


if (__PRODUCTION__) {
    enableProdMode();
}
platformBrowserDynamic().bootstrapModule(AppModule);

