// Name: Tommy Cao
// Date: 12/11/17
// Updated: 7/29/20
// Description: Angular Jasmine and Karma Testing

import { Injectable } from '@angular/core';

@Injectable()
export class TestService {

  constructor() { }

  add(a, b){
    return a + b;
  }

}
