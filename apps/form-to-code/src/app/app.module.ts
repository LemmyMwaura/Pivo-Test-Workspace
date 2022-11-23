import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { PreloadAllModules, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { environment } from '../environments/environment';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    
    RouterModule.forRoot(appRoutes, {
      initialNavigation: 'enabledBlocking',
      enableTracing: true,
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
