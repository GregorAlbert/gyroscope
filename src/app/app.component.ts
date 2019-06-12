import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public info = 'empty';

  @HostListener('window:deviceorientation', ['$event'])
  onClick(targetElement: any) {
    this.info = targetElement.alpha + ' ' + targetElement.beta + ' ' + targetElement.gamma;
  }
}


