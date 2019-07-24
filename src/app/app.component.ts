import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  list: Test[] = [
    new Test(new Date( 1995, 6, 25)),
    new Test(new Date( 2018, 7, 23)),
    new Test(new Date(2003, 5, 1)),
    new Test(new Date(1980, 2, 24))
  ];

  tri() : void {
    console.log(
      this.list.map(x => x.date)
      .sort()
    );
  }
  
}

export class Test {
  constructor (
    public date: Date) {}
}
