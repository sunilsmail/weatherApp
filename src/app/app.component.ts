import { Component } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weatherApp';
  constructor(){
    const time = moment.unix(1611993151).format();
    const jun = moment(time)
    console.log(jun);
  }
}
