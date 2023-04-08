const {app, BrowserWindow} = require('electron')
    // const url = require("url");
    // const path = require("path");


    const createWindow = () => {
      const win = new BrowserWindow({
        width: 800,
        height: 600,
      })
      win.webContents.openDevTools()
      win.loadFile('dist/poc-angular-electron/index.html')
    }
    
    // function createWindow () {
    //   mainWindow = new BrowserWindow({
    //     width: 800,
    //     height: 600,
    //     webPreferences: {
    //       nodeIntegration: true
    //     }
    //   })
    //   mainWindow.loadFile('dist/poc-angular-electron/index.html');
    //   // Open the DevTools.
    //   mainWindow.webContents.openDevTools()

    //   // mainWindow.on('closed', function () {
    //   //   mainWindow = null
    //   // })
    // }
    app.whenReady().then(() => {
      createWindow()
    })
    // app.on('ready', createWindow)

    // app.on('window-all-closed', function () {
    //   if (process.platform !== 'darwin') app.quit()
    // })

    // app.on('activate', function () {
    //   if (mainWindow === null) createWindow()
    // })