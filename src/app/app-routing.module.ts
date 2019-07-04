import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepositoryComponent } from './components/repository/repository.component';
import { BookmarkRepositoriesComponent } from './components/bookmark-repositories/bookmark-repositories.component';

const routes: Routes = [
	{ path: '', component: RepositoryComponent },
	{ path: 'repositories', component: RepositoryComponent },
	{ path: 'bookmarks', component: BookmarkRepositoriesComponent },
	{ path: '**', redirectTo: '' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
