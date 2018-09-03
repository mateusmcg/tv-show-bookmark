import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TmdbService } from '../../services/tmdb.service';
import { ShowTmdb } from '../../models/tmdb/show-tmdb.interface';
import { MatTab } from '@angular/material/tabs';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css'],
  providers: [MatTab]
})
export class ShowComponent implements OnInit {

  show: ShowTmdb;

  constructor(private route: ActivatedRoute, private $tmdb: TmdbService) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.loadShow(params.id));
  }

  loadShow(id: number) {
    this.$tmdb.getShowDetails(id).subscribe(show => {
      console.log(show);
      this.show = show;
    });
  }

}
