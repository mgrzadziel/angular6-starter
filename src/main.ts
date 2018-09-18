import './polyfills';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './app/_environments/environment';

import '../src/assets/style/saas/style.scss';

platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.log(err));


