import { Component } from '@angular/core';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  constructor(private datePipe: DatePipe) {}

  private selectedDate: Date;

  list: Test[] = [
    new Test(1, new Date("1995-6-25")),
    new Test(2, new Date( "2018-7-23")),
    new Test(5, new Date("2003, 5, 1")),
    new Test(4, new Date("1980, 2, 24"))
  ];

  tri() : void {
    console.log(
      this.list.sort((x, y) => x.date - y.date)
    );
    console.log(this.list);
    console.log(this.selectedDate);
  }

  conversion() : void {
    console.log(this.list);
    for (let element of this.list) {
     element.date = new Date(this.datePipe.transform(element.date, 'yyyy-MM-dd'));
    }
    console.log(this.list);
  }

  addDate(): void {
   this.list.push(
     new Test(0, this.selectedDate)
   );
   console.log('date ajoutée : ', this.selectedDate);
  }
  
}

export class Test {
  constructor (
    id: number,
    public date: Date) {}
}
