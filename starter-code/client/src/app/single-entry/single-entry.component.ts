import { Component, OnInit, Input } from '@angular/core';
import { EntryListService } from '../entry-list.service'
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css'],
  providers: [EntryListService]
})
export class SingleEntryComponent implements OnInit {
  journal: any;


  constructor(
    private route: ActivatedRoute,
    private EntryListService: EntryListService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getJournalDetails(params['id']);
    });
  }


  getJournalDetails(id) {
    this.EntryListService.getDetails(id)
      .subscribe((journal) => {
        this.journal = journal;
      });
  }
}