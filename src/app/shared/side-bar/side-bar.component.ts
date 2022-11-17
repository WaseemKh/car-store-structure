import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  // carTypes = [{ "Key": "1", "value": 'BMW' }, { "Key": "2", "value": "Mercides" }, { "Key": "3", "value": "VW" }]
  carTypes = ['All','BMW', "Mercides", "VW"]

@Output() sender= new EventEmitter();
  constructor() { }

  ngOnInit() {
   

  }
  trackByFn(index, reaction) {
    return reaction.id; // unique id corresponding to the item
  }

  filter(itemtype) {
    this.sender.emit(itemtype);
  }
}
