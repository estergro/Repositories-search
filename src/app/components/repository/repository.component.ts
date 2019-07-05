import { Component, OnInit } from '@angular/core';
import { RepositoryService } from '../../services/repository.service';
import { from } from 'rxjs';
import {Repository} from '../../models/Repository'
//import {SESSION_STORAGE, WebStorageService} from 'angular-webstorage-service';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
  repos: Repository[];
  search_name: string;
 public bookmarkRepos:any[]=[];
 

  constructor(private service: RepositoryService) { 
    
  }
  findRepo() {
    this.service.updateRepo(this.search_name);
    this.service.getRepos().subscribe(repos => {
      console.log(repos);
      this.repos = repos.items.map((repo) => {
        repo.bookmark = "bookmark";
        const index: number = this.bookmarkRepos.indexOf(repo);
      if (index !== -1) {
        repo.isbookmark =  true;
      }
      else
        repo.isbookmark =  false;
      return repo;
    });
      
    });
  }

bookmarkRepo(repo){
  if(!repo.isbookmark)
    {
      this.bookmarkRepos.push(repo);
      window.localStorage.setItem('repositories', JSON.stringify(this.bookmarkRepos));
      repo.bookmark ="bookmarked";
    }
  else 
    {
      const index: number = this.bookmarkRepos.indexOf(repo);
      if (index !== -1) {
          this.bookmarkRepos.splice(index, 1);}
          window.localStorage.setItem('repositories', JSON.stringify(this.bookmarkRepos));
      repo.bookmark ="bookmark";
    }
    repo.isbookmark = !repo.isbookmark       
}

  ngOnInit() {
    window.localStorage.setItem('repositories', '');
        this.service.getRepos().subscribe(repos => {
      console.log(repos);
      this.repos = repos.items.map((repo) => {
        repo.bookmark = "bookmark";
        const index: number = this.bookmarkRepos.indexOf(repo);
      if (index !== -1) {
        repo.isbookmark =  true;
      }
      else
        repo.isbookmark =  false;
        return repo;
    });
    });
  }

}
