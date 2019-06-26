import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ProfileService } from './services/profile.service';
import { RepositoryService } from './services/repository.service';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { RepositoryComponent } from './repository/repository.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    RepositoryComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [ProfileService, RepositoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
