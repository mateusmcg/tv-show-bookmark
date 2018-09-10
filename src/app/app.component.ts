import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';
import { MatButton, MatToolbar, MatIcon, MatCard, MatAutocomplete, MatFormField, MatInput } from '@angular/material';

import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MatButton, MatIcon, MatToolbar, MatCard, MatAutocomplete, MatFormField, MatInput, HeaderComponent]
})
export class AppComponent {

  constructor(public afAuth: AngularFireAuth) {
    this.afAuth.user.subscribe(user => {
      console.log(user);
    });
  }

  googleSignIn() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  googleLogOut() {
    this.afAuth.auth.signOut();
  }
}
