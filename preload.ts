
// const { contextBridge, ipcRenderer } = require('electron')
// document.addEventListener('animalfound', ()=>{
//     console.log("Start event triggered")
//   });

// const { contextBridge,ipcRenderer } = require('electron')

// contextBridge.exposeInMainWorld(
   
//     "api", {
//         loadPreferences: () => ipcRenderer.invoke('load-prefs'),
//          send: (channel, data) => {
            
//              let validChannels = ["openModal"];
//             if (validChannels.includes(channel)) {
//                  ipcRenderer.send(channel, data);
//              }
//          },
//         receive: (channel, func) => {
//             let validChannels = ["fromMain"];
//             if (validChannels.includes(channel)) {
//                 // Deliberately strip event as it includes `sender` 
//                 ipcRenderer.on(channel, (event, ...args) => func(...args));
//             }
//         }
//     }
// );
