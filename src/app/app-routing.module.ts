import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StepHtmlComponent } from './step-html/step-html.component';

const routes: Routes = [
  { path: '', component: StepHtmlComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
