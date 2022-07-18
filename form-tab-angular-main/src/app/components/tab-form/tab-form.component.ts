import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tab-form',
  templateUrl: './tab-form.component.html',
  styleUrls: ['./tab-form.component.css']
})
export class TabFormComponent implements OnInit {

    @Output() SendThisTab = new EventEmitter();

    tabs !: {
        name: string,
        text: string,
    }[];

    constructor() {
    }

    ngOnInit(): void {
    }

    Arr = Array
    inputTabsToAdd: number = 1;

    sendTabsValue() {
        this.tabs.length = this.inputTabsToAdd;
        this.SendThisTab.emit({
            tabs: this.tabs
        });
    }

    editArray(i:number) {
        if (!this.tabs){
            this.tabs = [];
        }
        if(this.tabs.length <= i){
            this.tabs.push({
                'name':'',
                'text':''
            })
        }
    }
}