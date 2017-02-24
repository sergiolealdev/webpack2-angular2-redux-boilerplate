
import 'reflect-metadata';
import 'core-js/es7/reflect';
import 'zone.js';

import '@angular/platform-browser-dynamic';
import '@angular/platform-browser';
import '@angular/core';
import '@angular/common';
import '@angular/http';
import '@angular/router';

// RxJS
import 'rxjs';


import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module.ts';

platformBrowserDynamic().bootstrapModule(AppModule);

