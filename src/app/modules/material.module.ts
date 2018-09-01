import { NgModule } from "@angular/core";

import { MatButtonModule,
         MatCheckboxModule,
         MatIconModule,
         MatToolbarModule,
         MatCardModule,
         MatMenuModule,
         MatAutocompleteModule,
         MatFormFieldModule,
         MatInputModule,
         MatGridListModule } from '@angular/material';

@NgModule({
    imports: [MatButtonModule,
              MatCheckboxModule,
              MatIconModule,
              MatToolbarModule,
              MatCardModule,
              MatMenuModule,
              MatAutocompleteModule,
              MatFormFieldModule,
              MatInputModule,
              MatGridListModule],

    exports: [MatButtonModule,
              MatCheckboxModule,
              MatIconModule,
              MatToolbarModule,
              MatCardModule,
              MatMenuModule,
              MatAutocompleteModule,
              MatFormFieldModule,
              MatInputModule,
              MatGridListModule]
})

export class MaterialModule { }
