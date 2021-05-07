import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  public GNUPGP_BINARY = 'https://gnupg.org/download/index.html#binary';

  constructor() { }

  ngOnInit(): void {
  }

}
