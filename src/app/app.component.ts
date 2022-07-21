import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-training-cooking-app';
  loadedFeature = 'shopping-list';

  onNavigate(target: {selectedFeature: string}) {
    this.loadedFeature = target.selectedFeature;
  }
}
