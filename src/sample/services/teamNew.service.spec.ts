
import { baseURL } from './../../shared/environment.config';
import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe(`FakeHttpClientResponses`, () => {

  beforeEach(() => {
    // 0. set up the test environment
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule
      ]
    });
  });

  fit(`should issue a request`,
    // 1. declare as async test since the HttpClient works with Observables
    async(
      // 2. inject HttpClient and HttpTestingController into the test
      inject([HttpClient, HttpTestingController], (http: HttpClient, backend: HttpTestingController) => {
        // 3. send a simple request
        http.get(`${baseURL}/team`).subscribe();
        // http.get(`${baseURL}/team`).subscribe();

        // 4. HttpTestingController supersedes `MockBackend` from the "old" Http package
        backend.expectOne({
          url: `${baseURL}/team`,
          method: 'GET'
        });
      })
    )
  );

});
