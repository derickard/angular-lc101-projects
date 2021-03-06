import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';
  takeOffEnabled= true;
  leftEnabled = true;
  rightEnabled = true;
  downEnabled = true;
  upEnabled = true;

  handleTakeOff() {
    let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
    if(result) {
      this.color='blue';
      this.height=10000;
      this.width=0;
      this.message='Shuttle in flight.';
      this.takeOffEnabled=false;
    }
  }

  handleLand(rocketImage: HTMLImageElement) {
    window.alert('The Shuttle is landing. Landing gear engaged.');
    this.message="The Shuttle has landed."
    this.color = 'green';
    this.height = 0;
    this.width=0;
    rocketImage.style.bottom='0px';
    rocketImage.style.left='0px';
    this.takeOffEnabled=true;
  }

  handleAbort(rocketImage: HTMLImageElement) {
    let result = window.confirm('Do you really want to abort the mission?');
    if(result) {
      this.message='Mission aborted';
      this.color='red';
      this.height=0;
      this.width=0;
      rocketImage.style.bottom='0px';
      rocketImage.style.left='0px';
      this.takeOffEnabled=true;
    }
  }

  edgeCheck(background: HTMLDivElement, rocketImage: HTMLImageElement) {
    let rocketHeight = parseInt(rocketImage.style.bottom);
    let rocketWidth = parseInt(rocketImage.style.left);
    
    if((rocketWidth+75)>background.offsetWidth ) {
      this.color='orange';
      this.rightEnabled = false;
    } else if (rocketWidth < 0 ) {
      this.color='orange';
      this.leftEnabled = false;
    } else if (rocketHeight < 0) {
      this.color='orange';
      this.downEnabled = false;
    } else if ((rocketHeight+75) > background.offsetHeight) {
      this.color='orange';
      this.upEnabled = false;
    } else {
      this.color='blue';
      this.upEnabled = true;
      this.downEnabled = true;
      this.leftEnabled = true;
      this.rightEnabled = true;
    }
  }
  
  moveRocket(rocketImage: HTMLImageElement, background: HTMLDivElement, direction: string) {
    if (direction === 'right') {
    let movement = parseInt(rocketImage.style.left) + 10 + 'px';
    rocketImage.style.left = movement;
    this.width = this.width + 10000;
    }

    if (direction === 'left') {
      let movement = parseInt(rocketImage.style.left) - 10 + 'px';
      rocketImage.style.left = movement;
      this.width = this.width - 10000;
    }

    if (direction === 'up') {
      let movement = parseInt(rocketImage.style.bottom) + 10 + 'px';
      rocketImage.style.bottom = movement;
      console.log(movement);
      this.width = this.height + 10000;
    }

    if (direction === 'down') {
      let movement = parseInt(rocketImage.style.bottom) - 10 + 'px';
      rocketImage.style.bottom = movement;
      this.width = this.height - 10000;
     }
     this.edgeCheck(background,rocketImage);
 }

}
