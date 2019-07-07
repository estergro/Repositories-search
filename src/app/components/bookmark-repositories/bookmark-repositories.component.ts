import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RepositoryService } from '../../services/repository.service';
import { Repository } from '../../models/Repository';
@Component({
  selector: 'app-bookmark-repositories',
  templateUrl: './bookmark-repositories.component.html',
  styleUrls: ['./bookmark-repositories.component.css']
})
export class BookmarkRepositoriesComponent implements OnInit {

  bookmarksRepos: Repository[]=[];
  constructor(private activatedRoute: ActivatedRoute,
		private repositoryService: RepositoryService) { }

  ngOnInit() {
    this.loadBookmarkrepos();
     }
  loadBookmarkrepos(): void {
		let bookmarks = sessionStorage.getItem('repositories');
    if(bookmarks)
    {
      this.bookmarksRepos = JSON.parse(bookmarks).map((repo) => {
        repo.bookmark = "bookmarked";
        repo.isbookmark =  true;
        return repo;
    });
		
    }
	}

  //REMOVE FROM BOOKMARKS  //need to add confirmation-dialog....
  bookmarkRepo(repo){
    
        const index: number = this.bookmarksRepos.indexOf(repo);
        if (index !== -1) {
            this.bookmarksRepos.splice(index, 1);}
            sessionStorage.setItem('repositories', JSON.stringify(this.bookmarksRepos));
        repo.bookmark ="bookmark";
      
      repo.isbookmark = !repo.isbookmark    
      this.loadBookmarkrepos();   
  }
	
}
