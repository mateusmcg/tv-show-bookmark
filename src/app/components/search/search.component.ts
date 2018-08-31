import { Component, OnInit } from '@angular/core';

import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [HeaderComponent]
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
