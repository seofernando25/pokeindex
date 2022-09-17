import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FallbackComponent } from './pages/fallback/fallback.component';
import { IndexComponent } from './pages/index/index.component';
import { SearchComponent } from './pages/search/search.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'search', component: SearchComponent },
  { path: '**', component: FallbackComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
