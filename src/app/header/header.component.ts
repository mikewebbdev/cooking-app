import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() buttonClicked = new EventEmitter<{selectedFeature: string}>();
  constructor() { }

  ngOnInit(): void {
  }

  onSelect(target: string) {
    this.buttonClicked.emit({selectedFeature: target});
  }
}
