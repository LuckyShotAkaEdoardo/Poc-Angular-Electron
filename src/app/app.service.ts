import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { UseQuery } from '@ngneat/query';
import { gitPublic } from './model';

@Injectable({ providedIn: 'root' })
export class GitService {
  private http = inject(HttpClient);
  private useQuery = inject(UseQuery);
  
  search(q:any) {
    return this.useQuery(['search'], () => {
      return this.http.get<any>(
        `https://api.github.com/search/repositories?q=`+q
      );
    });
  }
  }
  
  
  // getTodos() {
  //   return this.useQuery(['todos'], () => {
  //     return this.http.get<gitPublic[]>(
  //       "https://api.github.com/gists/public"
  //     );
  //   });
  // }
  // // 'https://jsonplaceholder.typicode.com/todos'
  // getTodo(id: number) {
  //   return this.useQuery(['todo', id], () => {
  //     return this.http.get<any>(
  //       `https://jsonplaceholder.typicode.com/todos/${id}`
  //     );
  //   });
  // }

