const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

console.log('Hello from MAIN process');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1500,
    height: 800,
    backgroundColor: '#ffffff',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
      // devTools: false
    },
    show: false,
  });

  mainWindow.loadFile('index.html');

  mainWindow.on('ready-to-show', () => {
    mainWindow.showInactive();
    mainWindow.minimize();
  });

  mainWindow.webContents.openDevTools();
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});
