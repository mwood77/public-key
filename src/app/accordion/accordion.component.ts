import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
	selector: 'app-accordion',
	templateUrl: './accordion.component.html',
	styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {


	public FILE_PATH = 'assets/@wmaw-public-key.gpg';
	public FILE_NAME = '@wmaw-public-key.gpg';

	public PERMA_SOURCE = 'https://keys.openpgp.org/search?q=nft%40mwood.dev';

	constructor(public dialog: MatDialog) { }

	ngOnInit(): void { }

	openHelpDialog(): void {
		this.dialog.open(DialogComponent);
	}

}
