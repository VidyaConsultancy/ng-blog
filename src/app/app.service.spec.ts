import { TestBed } from '@angular/core/testing';

import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add two values and return the result', () => {
    expect(service.add(10, 20)).toEqual(30);
    expect(service.operations.length).toBe(1);
    expect(service.operations[0]).toEqual('add');
  })

  it('should substract two values and return the result', () => {
    expect(service.substract(10, 20)).toEqual(-10);
  })
});
