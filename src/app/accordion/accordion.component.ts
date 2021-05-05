import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {


  public FILE_PATH = 'assets/@wmaw9-public-key.gpg';
  public FILE_NAME = '@wmaw9-public-key.gpg';

  public PERMA_SOURCE = 'https://keyserver2.pgp.com/vkd/SubmitSearch.event?SearchCriteria=nft%40wmaw.me';

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openHelpDialog() {
    this.dialog.open(DialogComponent);
  }

}
