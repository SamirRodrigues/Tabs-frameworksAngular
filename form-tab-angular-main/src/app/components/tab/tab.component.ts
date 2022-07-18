import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {
  @Input() tabName = '';
  @Input() tabText = '';
  @Input() index !:number ;
  @Output() SendThisTab = new EventEmitter();
  constructor() {
  }

  ngOnInit(): void {
  }

  setThisTab(){
    this.SendThisTab.emit({
      index: this.index
    });

  }
}
