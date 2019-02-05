import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestCacheComponent } from './test-cache/test-cache.component';
import { CacheMapService } from './cache/cache-map.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CachingInterceptor } from './cache/caching-interceptor';
import { TestCacheServiceService } from './services/test-cache-service.service';
import { Cache } from './cache/cache';

@NgModule({
  declarations: [
    AppComponent,
    TestCacheComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    TestCacheServiceService,
    CacheMapService,
    { provide: Cache, useClass: CacheMapService },
    { provide: HTTP_INTERCEPTORS, useClass: CachingInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
