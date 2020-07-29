// Name: Tommy Cao
// Date: 12/11/17
// Updated: 7/29/20
// Description: Angular Jasmine and Karma Testing

import { TestBed, inject } from '@angular/core/testing';

import { TestService } from './test.service';

describe('TestService', () => {
  // setup service
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestService]
    });
  });

  it('should be created', inject([TestService], (service: TestService) => {
    expect(service).toBeTruthy();
  }));

  it('should have add function',
  inject([TestService], (service: TestService) => {
    expect(service.add).toBeTruthy();
  }));

  it('should add correctly' ,
  inject([TestService], (service: TestService) => {
    expect(service.add(1,2)).toEqual(3);
  }));
});
