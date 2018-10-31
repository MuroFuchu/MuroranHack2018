import {AgmCoreModule, GoogleMapsAPIWrapper, MapsAPILoader} from '@agm/core';
import {NgZone, Injectable} from '@angular/core';
import { google } from '@agm/core/services/google-maps-types';

@Injectable()
export class GoogleMapsAPIWrapperEx extends GoogleMapsAPIWrapper {
    constructor(    private __loader :MapsAPILoader,
        private __zone :NgZone) {
            super(__loader, __zone);
    }

  getAddress(lat, lng){
      this.__loader.load().then(() => {
          let geocoder = new google.maps.Geocoder();
          
          let latlng = new google.maps.LatLng(lat, lng);
          geocoder.geocode({ 'latLng': latlng}, function(results, status){
              if(status == 'OK'){
                  results.forEach(resultsData => {
                      console.log(resultsData);
                  });
              }else{
                  console.log('住所を特定できなかった');
              }
          })

      })
    }
}