import { Component, OnInit } from '@angular/core';
import { TraktTvService } from "../../services/trakt-tv.service";
import { SearchShow } from '../../models/search-show.interface';
import { MatButton, MatToolbar, MatIcon, MatCard, MatAutocomplete, MatFormField, MatInput } from "@angular/material";
import { FormGroup, FormBuilder } from '@angular/forms';
import { switchMap, debounceTime, tap, finalize } from 'rxjs/operators';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [MatButton, MatIcon, MatToolbar, MatCard, MatAutocomplete, MatFormField, MatInput]
})
export class HeaderComponent implements OnInit {

  public searchForm: FormGroup;
  public shows: SearchShow[];

  constructor(private traktTv: TraktTvService, private formBuilder: FormBuilder, public afAuth: AngularFireAuth) { }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      queryField: null
    });

    this.searchForm
      .get("queryField")
      .valueChanges
      .pipe(
        debounceTime(200),
        switchMap(query => this.traktTv.search(query))
      )
      .subscribe(results => this.shows = results);
  }

  selectedShow(selectedItem) {
    console.debug(selectedItem);
  }

}
