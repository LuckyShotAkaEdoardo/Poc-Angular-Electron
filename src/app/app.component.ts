import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { GitService } from './app.service';
import { ReplaySubject, Subject, filter, take, takeUntil, tap } from 'rxjs';
import { ElectronService } from 'ngx-electron-fresh';
import { GitItemsSearch } from './model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GitService],
})

export class AppComponent implements OnDestroy,OnInit {
  
  gitService = inject(GitService);
  _destroy = new Subject<boolean>();
  value: any;
  list$ = new ReplaySubject<GitItemsSearch[]>();

  constructor(private _electronService: ElectronService) {
 
  }
  ngOnInit(): void {

  }
  ngOnDestroy(): void {
    this._destroy.next(true);
  }
  public playPingPong() {
    let pong: string = this._electronService
        .ipcRenderer.sendSync('ping');
    console.log(pong);
}

public beep() {
    // this._electronService.shell.openExternal("https://www.google.com");
    // this._electronService.shell.showItemInFolder("./")
    let isWindows =this._electronService.isWindows;
    this._electronService
    .ipcRenderer.sendSync('event',{path:"",command:"git clone",isWindows});
   // this._electronService.shell.
}
saveRepo(path:string){
  this._electronService
  .ipcRenderer.sendSync('event',{repoPath:path});
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
