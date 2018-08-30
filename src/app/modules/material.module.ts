import { NgModule } from "@angular/core";

import { MatButtonModule, MatCheckboxModule, MatIconModule, MatToolbarModule, MatCardModule, MatMenuModule } from '@angular/material';

@NgModule({
    imports: [MatButtonModule,
              MatCheckboxModule,
              MatIconModule,
              MatToolbarModule,
              MatCardModule,
              MatMenuModule],

    exports: [MatButtonModule,
              MatCheckboxModule,
              MatIconModule,
              MatToolbarModule,
              MatCardModule,
              MatMenuModule]
})

export class MaterialModule { }