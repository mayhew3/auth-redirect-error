import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideAuth0} from '@auth0/auth0-angular';
import {AsyncPipe} from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAuth0({
      domain: 'mayhew3.auth0.com',
      clientId: 'HY2lTrNdFc6HDrTlSoKZNL0EriSi0dnW',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    })
  ]
};
