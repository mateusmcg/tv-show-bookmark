import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { SearchShow } from '../models/search-show.interface';
import { catchError, map, tap, switchMap } from 'rxjs/operators';
import { TmdbService } from './tmdb.service';

@Injectable({
  providedIn: 'root'
})
export class TraktTvService {

  private options = {};

  constructor(private $http: HttpClient, private $tmdb: TmdbService) {
    this.options = {
      headers: {
        'Content-Type': 'application/json',
        'trakt-api-key': environment.traktTvClientId,
        'trakt-api-version': environment.traktTvApiVersion
      }
    };
  }

  public search(query: string): Observable<SearchShow[]> {
    return this.$http
            .get<SearchShow[]>(environment.traktTvBaseUrl + '/search/show?query=' + query, this.options);
  }
}
