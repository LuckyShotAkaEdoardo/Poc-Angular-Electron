//Uses node.js process manager
const electron = require('electron');
const child_process = require('child_process');
const dialog = electron.dialog;

// This function will output the lines from the script 
// and will return the full combined output
// as well as exit code when it's done (using the callback).
