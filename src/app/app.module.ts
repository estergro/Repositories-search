import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { RepositoryService } from './services/repository.service';
import { StorageServiceModule} from 'angular-webstorage-service';
import { AppComponent } from './app.component';

import { RepositoryComponent } from './repository/repository.component';



@NgModule({
  declarations: [
    AppComponent,
    
    RepositoryComponent
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    StorageServiceModule
  ],
  providers: [RepositoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
