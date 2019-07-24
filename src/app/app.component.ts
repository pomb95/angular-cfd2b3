import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  list: Test[] = [
    new Test(1, new Date( 1995, 6, 25)),
    new Test(2, new Date( 2018, 7, 23)),
    new Test(5, new Date(2003, 5, 1)),
    new Test(4, new Date(1980, 2, 24))
  ];

  tri() : void {
    console.log(
      this.list.sort((x, y) => x.date - y.date)
    );
    console.log(this.list);
  }
  
}

export class Test {
  constructor (
    id: number,
    public date: Date) {}
}
