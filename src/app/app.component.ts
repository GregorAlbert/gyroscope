import {Component, ElementRef, HostListener, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('spotlight') public spotlight: ElementRef;

  public deviceOrientationEvent;

  @HostListener('document:mousemove', ['$event'])
  public onMouseMove(event) {
    this.updateSpotlightByMouse(event);
  }

  private updateSpotlightByMouse(e) {
    this.spotlight.nativeElement.style.backgroundImage =
      `radial-gradient(circle at ${e.pageX / window.innerWidth * 100}% ${
      e.pageY / window.innerHeight * 100}%, transparent 160px, rgba(0, 0, 0, 0.85) 200px)`;
  }


  @HostListener('window:deviceorientation', ['$event'])
  onDeviceOrientationChange(deviceOrientationEvent: DeviceOrientationEvent) {
    this.deviceOrientationEvent = deviceOrientationEvent;
    this.updateSpotlight(deviceOrientationEvent);
  }

  private updateSpotlight(deviceOrientationEvent: DeviceOrientationEvent) {
    const windowWidthMultiplicator = window.innerWidth / 180;
    const windowHeightMultiplicator = window.innerHeight / 180;
    const mapX = ((deviceOrientationEvent.gamma % 90) + 90) * windowWidthMultiplicator;
    const mapY = ((deviceOrientationEvent.beta % 90) + 90) * windowHeightMultiplicator;
    this.spotlight.nativeElement.style.backgroundImage =
      `radial-gradient(circle at ${mapX / window.innerWidth * 100}% ${
      mapY / window.innerHeight * 100}%, transparent 160px, rgba(0, 0, 0, 0.85) 200px)`;
  }
}


