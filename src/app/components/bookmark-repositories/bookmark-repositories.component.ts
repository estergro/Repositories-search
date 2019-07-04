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
  private items : Repository[]=[];
  constructor(private activatedRoute: ActivatedRoute,
		private repositoryService: RepositoryService) { }

  ngOnInit() {
    
  }

}
