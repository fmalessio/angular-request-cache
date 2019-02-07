import { Injectable } from '@angular/core';
import { CacheEntry, MAX_CACHE_AGE } from './cache-entry';
import { HttpRequest, HttpResponse } from '@angular/common/http';
import { Cache } from './cache';

@Injectable({
  providedIn: 'root',
})
export class CacheMapService implements Cache {

  cacheMap = new Map<string, CacheEntry>();

  constructor() { }

  get(req: HttpRequest<any>): HttpResponse<any> | null {
    const entry = this.cacheMap.get(req.urlWithParams);
    if (!entry) {
      console.log(this.cacheMap);
      console.log(encodeURI(req.urlWithParams));
      return null;
    }
    const isExpired = (Date.now() - entry.entryTime) > MAX_CACHE_AGE;
    return isExpired ? null : entry.response;
  }

  put(req: HttpRequest<any>, res: HttpResponse<any>): void {
    console.log("Putting request in cache: " + req.url);
    const entry: CacheEntry = { url: req.urlWithParams, response: res, entryTime: Date.now() };
    this.cacheMap.set(req.urlWithParams, entry);
    this.deleteExpiredCache();
  }

  private deleteExpiredCache() {
    this.cacheMap.forEach(entry => {
      if ((Date.now() - entry.entryTime) > MAX_CACHE_AGE) {
        this.cacheMap.delete(entry.url);
      }
    })
  }

}
