import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class RepositoryService {

  private repo: string;


  constructor(private http: Http) {
    console.log('service is now ready');
    this.repo = 'Repositories-search';
  }

  getRepos() {
    return this.http.get('https://api.github.com/search/repositories?q=${' + this.repo + '}&per_page=100&page=1')
     .pipe(map(res => res.json()));
  }

  updateRepo(repo: string) {
    this.repo = repo;
  }
}
