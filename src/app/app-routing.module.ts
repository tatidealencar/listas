import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Contacts } from './contacts/contacts.component';
import { Tasks } from './tasks/tasks.component';

const routes: Routes = [
  {path:'tasks', component: Tasks},
  {path:'contacts', component: Contacts}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
