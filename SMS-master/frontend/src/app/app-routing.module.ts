import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudentProfileComponent} from "./s-profile/student-profile.component";


const routes: Routes = [{
  path: 'student-profile ',
  component: StudentProfileComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
