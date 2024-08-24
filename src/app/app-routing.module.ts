import { BooksListComponent } from './views/books-list/books-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    redirectTo: 'lista-livros',
    pathMatch: 'full'
  },
  {
    path: 'lista-livros',
    component: BooksListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
