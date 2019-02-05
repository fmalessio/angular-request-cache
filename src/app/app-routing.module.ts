import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestCacheComponent } from './test-cache/test-cache.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'test-cache', component: TestCacheComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
