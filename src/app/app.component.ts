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
    new Test(4, new Date("1980, 2, 24")),
    new Test(5, new Date("2003, 5, 2"))
  ];

  tri() : Test[] {
   return this.list.sort((x, y) => x.date - y.date);
  }

  groupByMonth(): void {
    let result = new Array<Test[]>();
    
    this.list = this.tri();
    let i = 0;
    let j = 0;
    let pivot = new Date();
    while (i < this.list.length) {
      console.log('while 1 = ', i);
      pivot = this.list[i].date;
      result.push([]);
      while ( i < this.list.length && pivot.getMonth() === this.list[i].date.getMonth() ) {
        console.log('while 2 = ', i);
        result[j].push(this.list[i]);
        console.log(result);
        i++;
      }
      j++;
    } 
    console.log(result);
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
