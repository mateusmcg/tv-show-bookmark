import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatGridList } from '@angular/material';

import { HeaderComponent } from '../header/header.component';
import { TraktTvService } from '../../services/trakt-tv.service';
import { SearchShow } from '../../models/search-show.interface';
import { TmdbService } from '../../services/tmdb.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [HeaderComponent, MatGridList]
})
export class SearchComponent implements OnInit {

  results: SearchShow[];

  constructor(private route: ActivatedRoute, private traktTv: TraktTvService, private tmdb: TmdbService) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.loadSearch(params.q));
  }

  loadSearch(query: string) {
    this.traktTv.search(query).subscribe(results => {
      console.log(results);
      results.map(result => {
        debugger;
        this.tmdb.getShowImages(result.show.ids.tmdb).subscribe(showImages => {
          result.show.posterImageUrl = 'https://image.tmdb.org/t/p/original' + showImages['posters'][0]['file_path'];
        });
      });
      this.results = results;
    });
  }

}
