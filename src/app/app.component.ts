import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';
import { MatButton, MatToolbar, MatIcon, MatCard, MatAutocomplete, MatFormField, MatInput } from "@angular/material";
import { TraktTvService } from "./services/trakt-tv.service";
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { SearchShow } from './models/search-show.interface';
import { switchMap, debounceTime, tap, finalize } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MatButton, MatIcon, MatToolbar, MatCard, MatAutocomplete, MatFormField, MatInput]
})
export class AppComponent {

  public searchForm: FormGroup;
  public shows: SearchShow[];

  constructor(public afAuth: AngularFireAuth, private traktTv: TraktTvService, private formBuilder: FormBuilder) {
    console.debug("Current user: ", this.afAuth.auth.currentUser);
    this.afAuth.user.subscribe(user => {
      console.debug(user);
    });

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

  googleSignIn() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  googleLogOut() {
    this.afAuth.auth.signOut();
  }

  selectedShow(selectedItem) {
    console.debug(selectedItem);
  }
}
