import { Component, OnInit } from '@angular/core';
import { RepositoryService } from '../../services/repository.service';
import { from } from 'rxjs';
import {Repository} from '../../models/Repository'

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
  repos: Repository[];
  reponame: string;
  bookmarksRepos: Repository[]=[];
 

  constructor(private service: RepositoryService) { 
    
  }
  findRepo() {
    this.service.updateRepo(this.reponame);
    this.service.getRepos().subscribe(repos => {
      console.log(repos);
      this.repos = repos.items.map((repo) => {
        
        let repIsBookmark = this.bookmarksRepos.find(ob => ob.id === repo.id);
      if (repIsBookmark) {
        repo.isbookmark =  true;
        repo.bookmark = "bookmarked";
      }
      else{
        repo.isbookmark =  false;
        repo.bookmark = "bookmark";}
      return repo;
    });
      
    });
  }

bookmarkRepo(repo){
  if(!repo.isbookmark)
    {
      const index: number = this.bookmarksRepos.indexOf(repo);
      if (index == -1) {
      this.bookmarksRepos.push(repo);
      sessionStorage.setItem('repositories', JSON.stringify(this.bookmarksRepos));
      repo.bookmark ="bookmarked";
    }
    }
  else 
    {
      const index: number = this.bookmarksRepos.indexOf(repo);
      if (index !== -1) {
          this.bookmarksRepos.splice(index, 1);}
          sessionStorage.setItem('repositories', JSON.stringify(this.bookmarksRepos));
      repo.bookmark ="bookmark";
    }
    repo.isbookmark = !repo.isbookmark       
}

  ngOnInit() {
    this.loadBookmarkRepos();
      this.findRepo();
    
  }

  loadBookmarkRepos(): void {
    let bookmarks = sessionStorage.getItem('repositories');
    if(bookmarks)
    {
      this.bookmarksRepos = JSON.parse(bookmarks).map((bookrepo) => {
      bookrepo.bookmark = "bookmarked";
      bookrepo.isbookmark =  true;
        return bookrepo;
    });

  }
    else{
      sessionStorage.setItem('repositories', '');
    }
  }
  

}
