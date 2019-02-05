import { Component, OnInit } from '@angular/core';
import { TestCacheServiceService } from '../services/test-cache-service.service';

@Component({
  selector: 'app-test-cache',
  templateUrl: './test-cache.component.html',
  styleUrls: ['./test-cache.component.css']
})
export class TestCacheComponent implements OnInit {

  public jsonResult: any[];

  constructor(private _TestCacheService: TestCacheServiceService) { }

  ngOnInit() {
    this._TestCacheService.getARequest().subscribe((response) => {
      this.jsonResult = response;
    });
  }

}
