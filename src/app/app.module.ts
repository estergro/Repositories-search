import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { RepositoryService } from './services/repository.service';
import { StorageServiceModule} from 'angular-webstorage-service';
import { AppComponent } from './app.component';

import { RepositoryComponent } from './components/repository/repository.component';
import { AppRoutingModule } from './app-routing.module';
import { BookmarkRepositoriesComponent } from './components/bookmark-repositories/bookmark-repositories.component';



@NgModule({
  declarations: [
    AppComponent,

    RepositoryComponent,

        BookmarkRepositoriesComponent
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    StorageServiceModule,
    AppRoutingModule
  ],
  providers: [RepositoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
