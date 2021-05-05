import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-key',
  templateUrl: './key.component.html',
  styleUrls: ['./key.component.scss']
})
export class KeyComponent implements OnInit {

	public isMobile: boolean = false;

	constructor() { }

	ngOnInit(): void {
		this.checkMobile();
	}

	checkMobile() {
		var isTouchDevice =
			(('ontouchstart' in window) ||
			(navigator.maxTouchPoints > 0) ||
			(navigator.msMaxTouchPoints > 0));
		if ( isTouchDevice ) {
			console.warn("Mobile device detected");			
			this.isMobile = true;
		}
	}

}
