// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyArGPtO0nR0S8DAjNhlrcEFqtzrWtxCYJM",
    authDomain: "tv-show-bookmark.firebaseapp.com",
    databaseURL: "https://tv-show-bookmark.firebaseio.com",
    projectId: "tv-show-bookmark",
    storageBucket: "tv-show-bookmark.appspot.com",
    messagingSenderId: "883297663795"
  },
  traktTvBaseUrl: "https://api.trakt.tv",
  traktTvClientId: "b0193b6297b2e397aeef7b832872e50752eae47b10c809f8dec7b98f34aafab1",
  traktTvApiVersion: 2
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
