import { NgModule } from "@angular/core";

import { MatButtonModule, 
         MatCheckboxModule,
         MatIconModule, 
         MatToolbarModule, 
         MatCardModule, 
         MatMenuModule, 
         MatAutocompleteModule,
         MatFormFieldModule,
         MatInputModule } from '@angular/material';

@NgModule({
    imports: [MatButtonModule,
              MatCheckboxModule,
              MatIconModule,
              MatToolbarModule,
              MatCardModule,
              MatMenuModule,
              MatAutocompleteModule,
              MatFormFieldModule,
              MatInputModule],

    exports: [MatButtonModule,
              MatCheckboxModule,
              MatIconModule,
              MatToolbarModule,
              MatCardModule,
              MatMenuModule,
              MatAutocompleteModule,
              MatFormFieldModule,
              MatInputModule]
})

export class MaterialModule { }