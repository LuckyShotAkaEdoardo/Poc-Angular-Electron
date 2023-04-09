import { Component, OnDestroy, inject } from '@angular/core';
import { GitService } from './app.service';
import { ReplaySubject, Subject, filter, take, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GitService],
})
export class AppComponent implements OnDestroy {
  gitService = inject(GitService);
  _destroy = new Subject<boolean>();
  value: any;
  list$ = new ReplaySubject<any[]>();
  constructor() {}
  ngOnDestroy(): void {
    this._destroy.next(true);
  }
  search(event: any) {
    this.value = event;
    setTimeout(() => {
      if (this.value == event) {
        this.gitService
          .search(event + 'language:assembly&sort=stars&order=desc')
          .result$.pipe(
            tap((res) => {
              if (res.data && res.data.items) this.list$.next(res.data.items);
              console.log('chiamata', res);
            })
          )
          .subscribe();
      }
    }, 1000);
  }

  title = 'Poc-Angular-Electron';
}
