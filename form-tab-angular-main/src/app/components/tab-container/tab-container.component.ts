import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tab-container',
  templateUrl: './tab-container.component.html',
  styleUrls: ['./tab-container.component.css']
})
export class TabContainerComponent implements OnInit {
  public index = 0 ;
  @Input() tabs !: {
    name: string,
    text: string,
  }[];

  constructor() { }

  ngOnInit(): void {
  }

  setCurrentTabText($event:any){
    this.index = $event.index;
  }

}
