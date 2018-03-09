import { Component, OnInit } from '@angular/core';
import { EntryListService } from '../entry-list.service'

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css'],
  providers: [EntryListService]
})
export class EntryListComponent implements OnInit {
  journals;

  constructor(private journal: EntryListService) { }

  ngOnInit() {
    this.journal.getList()
      .subscribe((journals) => {
        this.journals = journals;
      });
  }
}