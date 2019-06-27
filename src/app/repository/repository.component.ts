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
  repos: {name:'', isbookmark: false,
  bookmark:  "bookmark"};
 reponame: string;
 
 public bookmarksRepo:any=[]

  constructor(private service: RepositoryService) { //, private storage: WebStorageService
    
  }
  findRepo() {
    this.service.updateRepo(this.reponame);
    this.service.getRepos().subscribe(repos => {
      console.log(repos);
      this.repos = repos.items.map((repo) => {
        repo.bookmark = "bookmark";
        repo.isbookmark =  false;
        return repo;
    });
      
    });
  }

bookmarkRepo(repo){
  if(!repo.isbookmark)
    {
      sessionStorage.setItem(repo.name, JSON.stringify(repo));
      repo.bookmark ="bookmarked";
    }
  else 
    {
      sessionStorage.removeItem(repo.name);
      repo.bookmark ="bookmark";
    }
    repo.isbookmark = !repo.isbookmark       
}

  ngOnInit() {
    
    this.service.getRepos().subscribe(repos => {
      console.log(repos);
      this.repos = repos.items.map((repo) => {
        repo.bookmark = "bookmark";
        repo.isbookmark =  false;
        return repo;
    });
    });
  }

}
