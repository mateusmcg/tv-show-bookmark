import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchComponent } from './components/search/search.component';
import { ShowComponent } from './components/show/show.component';

const routes: Routes = [
  { path: 'search/:q', component: SearchComponent },
  { path: 'show/:id', component: ShowComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
