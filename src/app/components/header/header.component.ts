import { Component, OnInit } from '@angular/core';
import { TraktTvService } from '../../services/trakt-tv.service';
import { SearchShow } from '../../models/search-show.interface';
import {
  MatButton,
  MatToolbar,
  MatIcon,
  MatCard,
  MatAutocomplete,
  MatFormField,
  MatInput
} from '@angular/material';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { switchMap, debounceTime, tap, finalize } from 'rxjs/operators';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { query } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [
    MatButton,
    MatIcon,
    MatToolbar,
    MatCard,
    MatAutocomplete,
    MatFormField,
    MatInput
  ]
})
export class HeaderComponent implements OnInit {
  public searchInput = new FormControl();
  public searchForm: FormGroup;
  public shows: SearchShow[];

  constructor(
    private traktTv: TraktTvService,
    private formBuilder: FormBuilder,
    private router: Router,
    public afAuth: AngularFireAuth
  ) {}

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      queryField: null
    });

    this.searchForm
      .get('queryField')
      .valueChanges.pipe(
        debounceTime(200)
      )
      .subscribe(q => {
        this.router.navigate(['search', q]);
      });
  }

  googleLogOut() {
    this.afAuth.auth.signOut();
  }
}
