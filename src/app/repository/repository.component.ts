import { Component, OnInit } from '@angular/core';
import { RepositoryService } from '../services/repository.service';
import { from } from 'rxjs';
//import {SESSION_STORAGE, WebStorageService} from 'angular-webstorage-service';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
  repos: any[];
 reponame: string;
 checked: boolean;
 public bookmarksRepo:any=[]

  constructor(private service: RepositoryService) { //, private storage: WebStorageService
    this.service.getRepos().subscribe(repos => {
      console.log(repos);
      this.repos = repos.items;
    });
  }
  findRepo() {
    this.service.updateRepo(this.reponame);
    this.service.getRepos().subscribe(repos => {
      console.log(repos);
      this.repos = repos.items;
    });
  }

BookmarkRepo(key, val){
  //this.storage.set(key, val);
  //this.bookmarksRepo[key]= this.storage.get(key);

  //sessionStorage.setItem('bookmarkRepo', 'value');

// Get saved data from sessionStorage
//let data = sessionStorage.getItem('key');

// Remove saved data from sessionStorage
//sessionStorage.removeItem('key');
}

  ngOnInit() {
    this.service.getRepos().subscribe(repos => {
      console.log(repos);
      this.repos = repos.items;
    });
  }

}
