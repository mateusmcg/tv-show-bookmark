import { NgModule } from '@angular/core';

import { MatButtonModule,
         MatCheckboxModule,
         MatIconModule,
         MatToolbarModule,
         MatCardModule,
         MatMenuModule,
         MatAutocompleteModule,
         MatFormFieldModule,
         MatInputModule,
         MatGridListModule,
         MatTabsModule } from '@angular/material';

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
              MatGridListModule,
              MatTabsModule],

    exports: [MatButtonModule,
              MatCheckboxModule,
              MatIconModule,
              MatToolbarModule,
              MatCardModule,
              MatMenuModule,
              MatAutocompleteModule,
              MatFormFieldModule,
              MatInputModule,
              MatGridListModule,
              MatTabsModule]
})

export class MaterialModule { }
