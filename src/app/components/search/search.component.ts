import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatGridList } from '@angular/material';

import { HeaderComponent } from '../header/header.component';
import { TraktTvService } from '../../services/trakt-tv.service';
import { SearchShow } from '../../models/search-show.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [HeaderComponent, MatGridList]
})
export class SearchComponent implements OnInit {

  results: SearchShow[];

  constructor(private route: ActivatedRoute, private traktTv: TraktTvService) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.loadSearch(params.q));
  }

  loadSearch(query: string) {
    this.traktTv.search(query).subscribe(results => {
      console.log(results);
      this.results = results;
    });
  }

}
