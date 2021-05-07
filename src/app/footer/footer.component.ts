import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

	public version = environment.packageVersion;

	constructor() { }

	ngOnInit(): void {	}

	openURL(site: string, url: string): void {
		window.open(url);
	}

}
