import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {

  constructor(private $http: HttpClient) { }

  getShowImages(tmdbId) {
    return this.$http.get(environment.tmdbBaseUrl + 'tv/' + tmdbId + '/images' + '?api_key=' + environment.tmdbApiKey);
  }
}
