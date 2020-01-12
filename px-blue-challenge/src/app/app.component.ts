import { Component, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavigationService } from './services/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'px-blue-challenge';
  company = "Gary Steelworks"
  open = false;
  userMenu = false;

  constructor(private _navigationService: NavigationService, private route: ActivatedRoute, 
    changeDetectorRef: ChangeDetectorRef) {
      _navigationService.navToggled$.subscribe(
        value => {
          this.open = !this.open;
          changeDetectorRef.detectChanges();
        }
      );
  }

  onMenuClicked(){
    this._navigationService.toggleMenu();
  }

  closeNav(){
    this.open = false;
  }
}
