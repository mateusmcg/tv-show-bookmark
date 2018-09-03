import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { SearchShowTmdb } from '../models/tmdb/search-show-tmdb.interface';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {

  constructor(private $http: HttpClient) { }

  searchShows (query: string): Observable<SearchShowTmdb>  {
    return this.$http.get<SearchShowTmdb>(environment.tmdbBaseUrl + 'search/tv?query=' + query + '&api_key=' + environment.tmdbApiKey);
  }

  getShowImages(tmdbId) {
    return this.$http.get(environment.tmdbBaseUrl + 'tv/' + tmdbId + '/images' + '?api_key=' + environment.tmdbApiKey);
  }
}
