import { FindStringService } from './string-search.service';
import { TestBed, inject } from '@angular/core/testing';

describe('Find string service', () => {
    beforeEach(() => {
        // You need to configure the TestBed before each test, adding any components,
        // modules and services you need for the test. It's just like configuring
        // an regular @NgModule from scratch, but you just add what you need.
        TestBed.configureTestingModule({
            providers: [
                FindStringService
            ]
        });
    });
    fit('Should contain India',
        inject([FindStringService], (findStringService) => {
            expect(findStringService).toBeDefined();
            let result = findStringService.doesContainString('India', 'India is my country');
            expect(result).toEqual(true);
        }));
});
