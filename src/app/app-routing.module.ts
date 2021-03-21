import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";


const routes: Routes = [
  { path: '', component: HomeComponent},
  {path: 'search', loadChildren: () => import('./components/search-page/search-page.module').then(m => m.SearchPageModule)}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [ ]
})
export class AppRoutingModule {}