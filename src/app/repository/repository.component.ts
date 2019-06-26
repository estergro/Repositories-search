import { Component, OnInit } from '@angular/core';
import { RepositoryService } from '../services/repository.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
  repos: any[];
 reponame: string;

  constructor(private service: RepositoryService) { 
    this.service.getRepos().subscribe(repos => {
      console.log(repos);
      this.repos = repos;
    });
  }
  findRepo() {
    this.service.updateRepo(this.reponame);
    this.service.getRepos().subscribe(repos => {
      console.log(repos);
      this.repos = repos;
    });
  }
  ngOnInit() {
  }

}
