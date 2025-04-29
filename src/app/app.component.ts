import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'project-angular';
  selectedTab: string = 'about';

  tabChanged(tab: string): void {
    switch (tab) {
      case 'about':
        this.selectedTab = 'about';
        break;
      case 'exprience':
        this.selectedTab = 'exprience';
        break;
      case 'skills':
        this.selectedTab = 'skills';
        break;
      case 'education':
        this.selectedTab = 'education';
        break;
    }
  }
}
