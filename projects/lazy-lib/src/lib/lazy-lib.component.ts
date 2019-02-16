import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-lazy-lib',
  template: `
    <p>
      lazy-lib works!
    </p>
  `,
  styles: []
})
export class LazyLibComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
