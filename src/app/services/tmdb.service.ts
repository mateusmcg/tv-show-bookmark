import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { SearchShowTmdb } from '../models/tmdb/search-show-tmdb.interface';
import { ShowTmdb } from '../models/tmdb/show-tmdb.interface';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {

  constructor(private $http: HttpClient) { }

  searchShows (query: string): Observable<SearchShowTmdb>  {
    return this.$http.get<SearchShowTmdb>(environment.tmdbBaseUrl + 'search/tv?query=' + query + '&api_key=' + environment.tmdbApiKey);
  }

  getShowDetails(tmdbId): Observable<ShowTmdb> {
    // tslint:disable-next-line:max-line-length
    return this.$http.get<ShowTmdb>(environment.tmdbBaseUrl + 'tv/' + tmdbId + '?append_to_response=videos,images,seasons&api_key=' + environment.tmdbApiKey);
  }
}
