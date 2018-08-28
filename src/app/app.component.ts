import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';
import { MatButton } from "@angular/material/button";
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MatButton, MatIcon]
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

  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  logout() {
    this.afAuth.auth.signOut();
  }
}
