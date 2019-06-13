import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public deviceOrientationEvent;

  @HostListener('window:deviceorientation', ['$event'])
  onDeviceOrientationChange(deviceOrientationEvent: DeviceOrientationEvent) {
    this.deviceOrientationEvent = deviceOrientationEvent.gamma;
  }
}


