const {
  app,
  BrowserWindow,
  ipcMain,
  ipcRenderer,
  dialog,
} = require('electron');
const path = require('path');

const nodeChildProcess = require('child_process');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      preload: path.join(__dirname, 'preload.ts'),
    },
  });
  win.webContents.openDevTools();

  win.loadFile('dist/poc-angular-electron/index.html');
};

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

ipcMain.on('test', (event, args) => {
  console.log('electron get data', event, args);
  event.reply('getDataResponse', {
    data: [
      {
        name: 'test',
      },
    ],
  });
});

ipcMain.on('event', async (event, args) => {
  console.log(args);
  const result = await dialog.showOpenDialog({ properties: ['openDirectory'] });
  console.log('cartella scelta', result);
  let script;
  if (result.canceled !=true && result.filePaths) {
    const win = new BrowserWindow({
      width: 300,
      height: 300,
    });
   // script = saveGit(args.repoPath,result.filePaths,args.isWindows)
    if (!args.isWindows) {
      script = nodeChildProcess.spawn('bash', [
        'gitClone.sh',
        args.repoPath,
      result.filePaths,
      
      ]);
    } else {
       script = nodeChildProcess.spawn('cmd.exe', [
        '/c',
        'gitClone.bat',
        'cd  ' + result.filePaths,
        args.command,
      ]);
    }
let error ="";

    script.stdout.on('data', (data) => {
      console.log('stdout: ' + data);
    });

   await script.stderr.on('data', (err) => {
      console.log('stderr: ' + err);
      console.log("stderr ",err.fatal)

    error = err.toString()

    });

  await  script.on('exit', (code) => {
      let cd =code.toString()
      let options = {
        type: 'question',
        defaultId: 2,
        title: 'Result',
        message: cd,
      };
      if(code != 0){
         options = {
          type: 'question',
          defaultId: 2,
          title: 'ERROR',
          message: error,
    
        } 
      }else{
          options = {
            type: 'question',
            defaultId: 2,
            title: 'Result',
            message: "COMPLETE",
        }; 
          dialog.showMessageBox(win, options)
      }
    });
  
  }
});
