import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";



import { MaterialComponentsModule } from '../../shared/material-components.module';
import { SearchPageComponent } from "./search-page.component";

@NgModule({
  imports: [MaterialComponentsModule, RouterModule.forChild([{path: '', component: SearchPageComponent}])]
})
export class SearchPageModule {}