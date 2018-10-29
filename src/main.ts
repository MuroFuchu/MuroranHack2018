// Onsen UI Styling and Icons
require('onsenui/css/onsen-css-components.css');
require('onsenui/css/onsenui.css');

// Application code starts here
import {enableProdMode, NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {HttpModule} from '@angular/http';

import {OnsenModule} from 'ngx-onsenui';
import {DexieModule,DexieConfig} from 'ngx-dexie';

import {MyApp} from './app/app';

// Add
import { Menu } from './modules/children/menu/menu';
import { Map } from './modules/children/map/map';
import { RegistrationList } from './modules/children/registrationList/registrationList';
import { Upload } from './modules/children/upload/upload';
import { TimeTrip } from './modules/children/timeTrip/timeTrip';

// Service
import { IndexedDbService } from './services/IndexedDbService';
import { GetJsonService } from './services/GetJsonService';
 
const config: DexieConfig = {
  databaseName: 'TimeTripPhotoGallery',//your database name here
  schema: {
    CheakInitData: '++ID',
    TrnPhotoInfo: '++PhotoID,Year,LocationID,Comment,Bin,LastUpdateDateTime',
    MstLocationInfo: '++LocationID,Title,Address,Latitude,Longitude'
  } // any schema of your choice
};

import { AgmCoreModule } from '@agm/core';

//'./modules/children/menu';

// Enable production mode when in production mode.
if (process.env.NODE_ENV === 'production') {
  enableProdMode();
}

// const routes: Routes = [
//   { path: '', loadChildren: './modules/children.module#ChildrenModule' },
// ];

 @NgModule({
     imports: [
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyCju8LIyDfOiDbk53jDrNnW1ifs7F-4tEU'
          }),
        OnsenModule, // has BrowserModule internally
         HttpModule,
         HttpClientModule,
         CommonModule,
         FormsModule,
         DexieModule.forRoot(config)
     ],
     declarations: [
         MyApp,
         Menu,
         Map,
         RegistrationList,
         Upload,
         TimeTrip,
     ],
     entryComponents: [
         Menu,
         Map,
         RegistrationList,
         Upload,
         TimeTrip,
     ],  
     bootstrap: [
         MyApp,
     ],
     providers: [
        IndexedDbService,
        GetJsonService,
     ],
     schemas: [
         CUSTOM_ELEMENTS_SCHEMA,
     ],
 })
class AppModule {}

if (module['hot']) module['hot'].accept();

platformBrowserDynamic().bootstrapModule(AppModule)
.catch(err => console.error(err));
