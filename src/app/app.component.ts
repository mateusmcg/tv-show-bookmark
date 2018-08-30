import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';
import { MatButton, MatToolbar, MatIcon, MatCard } from "@angular/material";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MatButton, MatIcon, MatToolbar, MatCard]
})
export class AppComponent {
  title = 'app';

  /**
   *
   */
  constructor(private afAuth: AngularFireAuth) {
    console.debug("Current user: ", this.afAuth.auth.currentUser);
    this.afAuth.user.subscribe(user => {
      console.debug(user);
    });
  }

  googleSignIn() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  googleLogOut() {
    this.afAuth.auth.signOut();
  }
}
