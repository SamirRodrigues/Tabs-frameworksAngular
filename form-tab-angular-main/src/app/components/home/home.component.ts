import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    tabs: {
        name: string,
        text: string,
    }[] = [];

    constructor() {
    }

    ngOnInit(): void {
    }

    saveTabs($event: any) {
        console.log('HEY')
        this.tabs = [...$event.tabs];
    }

}
